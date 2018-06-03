import React from 'react'
import {Button, Icon} from 'antd';
import "./StarBtn.css";

class StarBtn extends React.Component { 
    render() {
        const IconText = ({ type, text }) => (
            <span>
              <Icon type={type} style={{ marginRight: 8 }} onClick={this.props.handleStarBtn} />
              {text}
            </span>
        );
        return (
            <IconText type={this.props.star? "star":"star-o"} text={this.props.stars} /> 
        );
    }
}



export default StarBtn;

                      