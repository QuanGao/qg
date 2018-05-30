import React from "react"

import { List, Avatar } from 'antd';

const SimpleList = (props) =>
(<List
    itemLayout="horizontal"
    dataSource={props.data}
    renderItem={item => (
      <List.Item>
        <List.Item.Meta
        //   avatar={ <Avatar style={{ backgroundColor: '#87d068' }} icon="user" />}
          avatar={ <Avatar icon="user" style={{ color: '#f56a00', backgroundColor: '#fde3cf' }} />}
          title={`Anonymous User @ ${item.createdAt.split("T")[0]}`}
          description={item.content}
        />
      </List.Item>
    )}
  />);

  export default SimpleList


//   {{ backgroundColor: '#'+(Math.random()*0xFFFFFF<<0).toString(16) }} `