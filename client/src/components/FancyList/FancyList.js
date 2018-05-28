import React from 'react'
import { Layout } from 'antd';
import "./FancyList.css";
import API from "../../utils/API"
import { List, Avatar, Icon } from 'antd';

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

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
            footer={<div><b>Feel free to leave a comment and let me know what you think!</b></div>}
            renderItem={item => (
                <List.Item
                    key={item.title}
                    actions={[<IconText type="star-o" text={item.stars} />, 
                    <IconText type="like-o" text={item.likes}  />, 
                    <IconText type="message" text={item.notes.length} />,
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

      
                    

       