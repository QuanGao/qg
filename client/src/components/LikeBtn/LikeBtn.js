import React from 'react'
import {Button, Icon} from 'antd';
import "./LikeBtn.css";
import API from "../../utils/API"
import SimpleList from "../SimpleList"

class LikeBtn extends React.Component { 
    state = {
        data: {},
        like: false
    }

    componentDidMount(){
        API.getOneProjectData(this.props.projectId).then(response =>
            this.setState({
                data: response.data
            }, ()=>console.log(this.state))
        )
    }

    handleLikeBtn = () => {
        if(this.state.like){
            API.unlikeProject(this.props.projectId)
            .then(response => this.setState({
                    like: !this.state.like,
                    data: response.data
                })           
            )
        }else {
            API.likeProject(this.props.projectId)
            .then(response => this.setState({
                    like: !this.state.like,
                    data: response.data
                })           
            )
        }
    }
    render() {
        const { data, like} = this.state;
        const IconText = ({ type, text }) => (
            <span>
              <Icon type={type} style={{ marginRight: 8 }} onClick={this.handleLikeBtn} />
              {text}
            </span>
        );
        return (
            <IconText type={like? "like":"like-o"} text={data.likes} /> 
        );
    }
}



export default LikeBtn;

                      