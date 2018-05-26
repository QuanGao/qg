import React from 'react'
import { Layout } from 'antd';
import "./FancyList.css";

import { List, Avatar, Icon } from 'antd';

const listData = [];
for (let i = 0; i < 3; i++) {
  listData.push({
    href: 'http://ant.design',
    title: `ant design part ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

const FancyList = () =>(
  <List
    itemLayout="vertical"
    size="large"
    pagination={{
        onChange: (page) => {
            console.log(page);
        },
        pageSize: 3,
    }}
    dataSource={listData}
    footer={<div><b>Feel free to leave a comment and let me know what you think!</b></div>}
    renderItem={item => (
        <List.Item
            key={item.title}
            actions={[<IconText type="star-o" text="156" />, 
            <IconText type="like-o" text="156" />, 
            <IconText type="message" text="2" />,
            <a><Icon type="caret-right"/></a>,
            <a><Icon type="code-o"/></a>
        ]}
            extra={<img width={272} alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />}
        >
            <List.Item.Meta
                avatar={<Avatar src={item.avatar} />}
                title={<a href={item.href}>{item.title}</a>}
                description={item.description}
            />
            {item.content}
      </List.Item>
    )}
  />);

export default FancyList;

      
                    

       