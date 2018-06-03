import React from 'react'
import { Layout } from 'antd';
import "./FancyList.css";
import API from "../../utils/API"
import { List, Avatar, Icon } from 'antd';

import CommentBtn from "../CommentBtn";
import LikeBtn from "../LikeBtn";
import StarBtn from "../StarBtn";
import FancyListFooter from "../FancyListFooter"

class FancyList extends React.Component{
    state = {
        listData:[]
    }

    componentDidMount(){
        API.getTProjectData().then(        
            projectData=>{
                this.setState({
                    listData: projectData.data
                })
            }
        )
    }
    
    render () {
        return (<List
            itemLayout="vertical"
            size="large"
            pagination={{
                onChange: (page) => {
                    console.log(page);
                },
                pageSize: 3,
            }}
            dataSource={this.state.listData}
            footer = {<FancyListFooter/>}
            renderItem={(item,i) => (
                <List.Item
                    key={item.title}
                    id={`TProject${i}`}
                    actions={[
                    <StarBtn star={item.star} stars={item.stars} handleStarBtn={()=>this.handleStarBtn(item._id)}/>,
                    <LikeBtn like={item.like} likes={item.likes} handleLikeBtn={()=>this.handleLikeBtn(item._id)}/>,
                    <CommentBtn projectId={item._id} data={item} handleSaveComment={this.handleSaveComment}/>,
                    <a href={item.pageLink}><Icon type={item.pageLink?"play-circle-o":"minus-circle-o"}/></a>,
                    <a><Icon type="code-o"/></a>
                ]}
            extra={<a href={item.pageLink}><img width={272} alt="logo" src={item.imgSrc}/></a>}
                >
                    <List.Item.Meta
                        avatar={<Avatar src={item.avatar} />}
                        title={<a href={item.pageLink}>{item.title}</a>}
                        description={item.description}
                    />
                    {item.content}
            </List.Item>
            )}
        />
    )}
};

export default FancyList;

      
                    

       