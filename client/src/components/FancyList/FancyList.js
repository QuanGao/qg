import React from 'react'
import "./FancyList.css";
import API from "../../utils/API"
import { List, Avatar, Icon, BackTop, Layout } from 'antd';
import CommentBtn from "../CommentBtn";
import LikeBtn from "../LikeBtn";
import StarBtn from "../StarBtn";
import FancyListFooter from "../FancyListFooter"
import MyFooter from "../MyFooter"
import Firebase from "./images/firebase.png"
import Handlebars from "./images/handlebars.png"
import Twilio from "./images/twilio.png"
import Reactstrap from "./images/reactstrap.png"
import Passport from "./images/passport.png"

import react from "./images/react.png"
import MongoDB from "./images/mongodb.png"
import Node from "./images/node.png"
import Express from "./images/express.png"
import Sequelize from "./images/sequelize.png"
import jQuery from "./images/jQuery.png"
import CSS from "./images/CSS.png"
import Bootstrap from "./images/bootstrap.png"
import HTML from "./images/HTML.png";
import htmlcss from "./images/htmlcss.png"
import api from "./images/api.jpg";
import Heroku from "./images/heroku.png"
const pngs = {API:api, React:react, Heroku, htmlcss, Firebase,Handlebars,Twilio,Passport,Reactstrap, react, MongoDB, Node, Express, Sequelize, jQuery, CSS, Bootstrap, HTML}
const { Header, Content} = Layout;

class FancyList extends React.Component{
    state = {
        data:[],
        page:1
    }

    componentDidMount(){
        API.getTProjectData().then(        
            projectData=>{
                this.setState({
                    data: projectData.data
                })
            }
        )
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

    render () {
        return (
        <Layout className="content-wrapper">

            <Header style={{ background: '#fff', padding: 0 }} >
                <h1>Team Projects</h1>
            </Header>
        
            <Content style={{ margin: '0 16px', padding:20}}> 
                <List
                className="fancyList"
                itemLayout="vertical"
                size="large"
                pagination={{
                    onChange: (page) => {
                        console.log(page);
                        this.setState({page})
                    },
                    pageSize: 1,
                }}
                dataSource={this.state.data}
                footer = {<FancyListFooter page={this.state.page}/>}
                renderItem={(item,i) => (
                    <List.Item
                        key={item.title}
                        id={`TProject${i}`}
                        actions={[
                        <StarBtn star={item.star} stars={item.stars} handleStarBtn={()=>this.handleStarBtn(item._id)}/>,
                        <LikeBtn like={item.like} likes={item.likes} handleLikeBtn={()=>this.handleLikeBtn(item._id)}/>,
                        <CommentBtn projectId={item._id} data={item} handleSaveComment={this.handleSaveComment}/>,
                        <a href={item.pageLink} target="_blank" rel="noopener noreferrer"><Icon type={item.pageLink?"play-circle-o":"minus-circle-o"}/></a>,
                        <a href={item.codeLink} target="_blank" rel="noopener noreferrer"><Icon type="code-o"/></a>
                    ]}
                extra={<a href={item.pageLink} target="_blank" rel="noopener noreferrer"><img width={272} alt="logo" src={item.imgSrc}/></a>}
                    >
                        <List.Item.Meta
                            avatar={<Avatar src={item.avatar} />}
                            title={<a href={item.pageLink} target="_blank" rel="noopener noreferrer">{item.title}</a>}
                            description={`${item.date.split("T")[0]} | ${item.description}`}
                        />
                        {<div className="keywordsDiv">
                            {item.keywords.map((word,i) => <span key={i}><img style={{height:30}} src={pngs[word]} alt="word"/></span> )}     
                        </div>}   
                        {item.content} 
                </List.Item>
                )}
            />
            <BackTop/>
            </Content>    
            <MyFooter/> 
        </Layout>

    )}
};

export default FancyList;

      
                    

       