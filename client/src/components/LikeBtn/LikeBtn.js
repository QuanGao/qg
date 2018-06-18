import React from 'react'
import {Icon} from 'antd';
import "./LikeBtn.css";

class LikeBtn extends React.Component { 
    render() {
        const IconText = ({ type, text }) => (
            <span>
              <Icon type={type} style={{ marginRight: 8 }} onClick={this.props.handleLikeBtn} />
              {text}
            </span>
        );
        return (
            <IconText type={this.props.like? "like":"like-o"} text={this.props.likes} /> 
        );
    }
}



export default LikeBtn;

                      