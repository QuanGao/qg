import React from 'react'
import { List, Avatar, Button, Spin, Icon, Divider} from 'antd';
import "./LoadMoreList.css"
import axios from 'axios';
import API from "../../utils/API"
import profile from "./images/quan.jpg"
import scrollToComponent from 'react-scroll-to-component';
import CommentBtn from "../CommentBtn";
import LikeBtn from "../LikeBtn";
import StarBtn from "../StarBtn";

const IconText = ({ type, text }) => (
    <span>
      <Icon type={type} style={{ marginRight: 8 }} />
      {text}
    </span>
  );

// let batch = 0;
class LoadMoreList extends React.Component {
    state = {
        loading: true,
        data: [],
    }

    componentDidMount(){
        API.getSProjectData().then(        
            projectData=>{
                const dataWithStatus = projectData.data.map(
                    project => {
                        project.like = false;
                        return project
                    })
        
                this.setState({
                    data: dataWithStatus,
                    loading: false
                })
            }
        )
    }

    handleSort = (incremental) => {
        const data = [...this.state.data];
        this.setState({
            data: this.sortProjects(data, incremental, "stars")
        })
    }

    sortProjects = (data, incremental, param) => {
        return data.sort((a,b) => {
            const calPop = (project) => param === "notes"? project[param].length : +project[param]
            return incremental? calPop(a)-calPop(b):calPop(b)-calPop(a)
        });
    }
    updateStateAfterLikeStar = (alldata, projectId, response, action, condition) => {
        const updatedProject = response.data;
        updatedProject[action] = condition
        const updatedData = alldata.map(project => {
                return project._id === projectId? updatedProject:project
        })
        this.setState({
            data: updatedData
        })
    };  

    handleLikeBtn = (projectId) => {
        const alldata = [...this.state.data]
        const projectLiked = alldata.find(project => project._id === projectId)
        if(projectLiked.like){
            API.unlikeProject(projectId)
            .then(response => {
               this.updateStateAfterLikeStar(alldata, projectId, response, "like", false) 
            })     
     
        }else {
            API.likeProject(projectId)
            .then(response => {
                this.updateStateAfterLikeStar(alldata, projectId, response, "like", true) 
            })
        }      
    };
    handleStarBtn = (projectId) => {
        const alldata = [...this.state.data]
        const projectStared = alldata.find(project => project._id === projectId)
        if(projectStared.star){
            API.unstarProject(projectId)
            .then(response => {
               this.updateStateAfterLikeStar(alldata, projectId, response, "star", false) 
            })     
     
        }else {
            API.starProject(projectId)
            .then(response => {
                this.updateStateAfterLikeStar(alldata, projectId, response, "star", true) 
            })
        }      
    }
  render() {
    const { loading,data} = this.state;
    return (
    <frag>
        <Button.Group size={2}>
            <span> Popularity </span>
            <Button onClick={()=>this.handleSort(false)} type="dashed" icon="up" value="small"/>
            <Button onClick={()=>this.handleSort(true)} type="dashed" icon="down" value="small"/>
        </Button.Group>
      <List
        className="demo-loadmore-list"
        loading={loading}
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item) => (
          <List.Item actions={[<a href={item.pageLink}><Icon type={item.pageLink?"play-circle-o":"minus-circle-o"}/></a>,
                                <a href={item.codeLink}><Icon type="code-o"/></a>]}>
            <List.Item.Meta
              avatar={<Avatar src={profile} />}            
              title={<a href={item.pageLink ||item.codeLink }>{item.title}</a>}
              description={item.description}
            />
            <div>
                <StarBtn star={item.star} stars={item.stars} handleStarBtn={()=>this.handleStarBtn(item._id)}/>  
                <Divider type="vertical"/>
                <LikeBtn like={item.like} likes={item.likes} handleLikeBtn={()=>this.handleLikeBtn(item._id)}/> 
                <Divider type="vertical"/>
                <CommentBtn projectId={item._id}/>
            </div>
          </List.Item>
        )}
      />
    </frag>
    );
  }
}

export default LoadMoreList;

                      