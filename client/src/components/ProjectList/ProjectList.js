import React from 'react'
import { List, Avatar, Button, Spin, Icon, Divider, BackTop} from 'antd';
import "./ProjectList.css"
import axios from 'axios';
import API from "../../utils/API"
import profile from "./images/quan.jpg"
import scrollToComponent from 'react-scroll-to-component';
import CommentBtn from "../CommentBtn";
import LikeBtn from "../LikeBtn";
import StarBtn from "../StarBtn";
import SortBtn from "../SortBtn";

class ProjectList extends React.Component {
    state = {
        loading: true,
        data: [],
        sortParam: ""
    }

    componentDidMount(){
        API.getSProjectData().then(        
            projectData=>{
                this.setState({
                    data: projectData.data,
                    loading: false
                })
            }
        )
    }
    handleSortParamChange = (value) => {
        this.setState({
            sortParam: value
        })
    };

    handleSort = (incremental, param) => {
        const data = [...this.state.data];
        this.setState({
            data: this.sortProjects(data, incremental, param)
        })
    }

    sortProjects = (data, incremental, param) => {
        return data.sort((a,b) => {
            const calPop = (project) => param === "notes"? project[param].length : +project[param]
            return incremental? calPop(a)-calPop(b):calPop(b)-calPop(a)
        });
    }
    updateStateAfterLikeStar = (alldata, projectData, action, condition) => {
        const updatedProject = {...projectData};
        updatedProject[action] = condition;

        condition? updatedProject[`${action}s`]++ : updatedProject[`${action}s`]--


        const updatedData = alldata.map(project => {
                return project._id === updatedProject._id? updatedProject:project
        })
        this.setState({
            data: updatedData
        }, ()=>console.log(this.state))
    };  

    handleLikeBtn = (projectId) => {
        const alldata = [...this.state.data]
        const projectLiked = alldata.find(project => project._id === projectId)
        if(projectLiked.like){
            API.unlikeProject(projectId)
            .then(response => {
            this.updateStateAfterLikeStar(alldata, projectLiked, "like", false) 
            })     
     
        }else {
            API.likeProject(projectId)
            .then(response => {
                this.updateStateAfterLikeStar(alldata, projectLiked, "like", true) 
            })
        }      
    };
    handleStarBtn = (projectId) => {
        const alldata = [...this.state.data]
        const projectStared = alldata.find(project => project._id === projectId)
        if(projectStared.star){
            API.unstarProject(projectId)
            .then(response => {
               this.updateStateAfterLikeStar(alldata, projectStared, "star", false) 
            })     
     
        }else {
            API.starProject(projectId)
            .then(response => {
                this.updateStateAfterLikeStar(alldata, projectStared, "star", true) 
            })
        }      
    }
    handleSaveComment = (projectId, content, cb) => {
        API.saveNote(projectId, {content})
            .then(response => {
                if(!response.data.errors){
                    const alldata = [...this.state.data]
                    const updatedProject = response.data;            
                    const updatedData = alldata.map(project => {                            
                        if(project._id === updatedProject._id) {
                            project.notes = updatedProject.notes;
                        }
                        return project
                    })
                    this.setState({
                        data: updatedData
                    }, cb)
                }else{
                    console.log(`save comment error message ${response.data.errors.content.message}`)
                }
            })
        }
  render() {
    const { loading,data} = this.state;
    return (
    <div>
        <Button.Group size={12}>        
            <SortBtn handleSort={this.handleSort} sortParam={this.state.sortParam} handleSortParamChange={this.handleSortParamChange}/>
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
                <CommentBtn projectId={item._id} data={item} handleSaveComment={this.handleSaveComment}/>
            </div>
          </List.Item>
        )}
      />
      <BackTop />    
    </div>
    );
  }
}

export default ProjectList;