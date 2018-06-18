import React from 'react'
import { List, Avatar, Button, Icon, BackTop, Tag, Layout} from 'antd';
import MyFooter from "../MyFooter"
import "./ProjectList.css"
import API from "../../utils/API"
import profile from "./images/quan.jpg"
import CommentBtn from "../CommentBtn";
import LikeBtn from "../LikeBtn";
import StarBtn from "../StarBtn";
import SortBtn from "../SortBtn";

const { Header, Content} = Layout;
const tags = {
    React: "#f50",
    jQuery: "#f50",
    Javascript: "#f50",
    Handlebars: "#f50",
    
    HTML:"#2db7f5",
    CSS: "#2db7f5",
    Bootstrap: "#2db7f5",

    Firebase: "#87d068",
    MongoDB: "#87d068",
    MySQL: "#87d068",
    Sequelize: "#87d068", 

    Express: "#108ee9",
    Node:"#108ee9",   
    API:"#108ee9",
    Cheerio:"#108ee9"
}
class ProjectList extends React.Component {
    state = {
        loading: true,
        data: []
    }

    componentDidMount(){
        API.getSProjectData().then(        
            projectData=>{
                const dataSortByDate = this.sortProjects([...projectData.data], false, "date")
                this.setState({
                    data: dataSortByDate,
                    loading: false
                })
            }
        )
    }

    handleSortParamChange = (param) => {
        const data = [...this.state.data];
            this.setState({
                data: this.sortProjects(data, false, param)
            })
    };

    sortProjects = (data, incremental, param) => {
        return data.sort((a,b) => {        
            const calPop = (project) => {
    
                switch(param){
                    case "notes":
                        return project[param].length;
                    case "date":
                        return new Date (project[param]);
                    default:
                        return +project[param]
                }
            }
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
        })
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
    <Layout className="content-wrapper">

        <Header style={{ background: '#fff', padding: 0 }} >
            <h1>Independent Projects</h1>
        </Header>

        <Content style={{ margin: '0 16px', padding:20}}> 
    
            <Button.Group size={12}>        
                <SortBtn handleSort={this.handleSort} sortParam={this.state.sortParam} handleSortParamChange={this.handleSortParamChange}/>
            </Button.Group>
            <List
                className="demo-loadmore-list"
                loading={loading}
                itemLayout="vertical"
                dataSource={data}
                renderItem={(item) => (
                <List.Item 
                    actions={[
                        <StarBtn star={item.star} stars={item.stars} handleStarBtn={()=>this.handleStarBtn(item._id)}/>,
                        <LikeBtn like={item.like} likes={item.likes} handleLikeBtn={()=>this.handleLikeBtn(item._id)}/>,
                        <CommentBtn projectId={item._id} data={item} handleSaveComment={this.handleSaveComment}/>,
                        <a href={item.pageLink}><Icon type={item.pageLink?"play-circle-o":"minus-circle-o"}/></a>,
                        <a href={item.codeLink}><Icon type="code-o"/></a>                   
                        ]}
                    extra={<span>{item.keywords.map((word,i) => <Tag key={i} color={tags[word]}>{word}</Tag>)}</span>}                         
                    >            
                    
                    <List.Item.Meta
                    avatar={<Avatar src={profile} />}            
                    title={<a href={item.pageLink ||item.codeLink }>{item.title}</a>}
                    description={`${item.date.split("T")[0]} | ${item.description}`}
                    />
                    
                </List.Item>
                )}
            />
            <BackTop />
        </Content>    
        <MyFooter/> 
        </Layout>
    );
  }
}

export default ProjectList;