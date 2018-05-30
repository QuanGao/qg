import React from 'react'
import {Button, Icon} from 'antd';
import "./StarBtn.css";
import API from "../../utils/API"
import SimpleList from "../SimpleList"

class StarBtn extends React.Component { 
    state = {
        data: {},
        star: false
    }

    componentDidMount(){
        API.getOneProjectData(this.props.projectId).then(response =>
            this.setState({
                data: response.data
            }, ()=>console.log(this.state))
        )
    }

    handleStarBtn = () => {
        if(this.state.star){
            API.unstarProject(this.props.projectId)
            .then(response => this.setState({
                    star: !this.state.star,
                    data: response.data
                })           
            )
        }else {
            API.starProject(this.props.projectId)
            .then(response => this.setState({
                    star: !this.state.star,
                    data: response.data
                })           
            )
        }
    }
    render() {
        const { data, star} = this.state;
        const IconText = ({ type, text }) => (
            <span>
              <Icon type={type} style={{ marginRight: 8 }} onClick={this.handleStarBtn} />
              {text}
            </span>
        );
        return (
            <IconText type={star? "star":"star-o"} text={data.stars} /> 
        );
    }
}



export default StarBtn;

                      