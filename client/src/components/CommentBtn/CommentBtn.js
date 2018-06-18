import React from 'react'
import {Modal, Icon, Input} from 'antd';
import "./CommentBtn.css";
import SimpleList from "../SimpleList"

const {TextArea} = Input

class CommentBtn extends React.Component { 
    state = {
        visible: false,
        showCommentInput: false,
        commentInput: ""
      }
    handleCommentInput = e => {
        const value = e.target.value;
        const name =  e.target.name;
        this.setState({
            [name]:value
        }, ()=>console.log(this.state))
      }
    handleAddCommentsBtn = () => {
        this.setState({
            showCommentInput: true
          });
        }
    showModal = () => {
        this.setState({
          visible: true,
          showCommentInput:false
        });
      }
    handleOk = () => {
        this.props.handleSaveComment(this.props.projectId, this.state.commentInput, 
            this.setState({
                visible: false,
                commentInput: ""
            })     
        )
    }
    handleCancel = () => {
        this.setState({
          visible: false,
          commentInput: ""
        });
      }
    render() {
        const { visible, showCommentInput } = this.state;
        const { data } = this.props
        const IconText = ({ type, text }) => (
            <span>
              <Icon type={type} style={{ marginRight: 8 }} onClick={this.showModal} />
              {text}
            </span>
        );
        return (
          <span>
            <IconText type="message" text={data.notes? data.notes.length:0} /> 
            <Modal title={data.title}
              visible={visible}
              onOk={this.handleOk}
              onCancel={this.handleCancel}
            >       
            <h4 onClick={this.handleAddCommentsBtn} style={{color: "#1a8fff"}}><Icon type="plus-circle-o" /> Comment </h4>
            {showCommentInput && <TextArea name="commentInput" onChange={this.handleCommentInput} placeholder="Any suggestion or comment is welcome" autosize />}
            {data.notes?<SimpleList data={data.notes}/>: null}                              
            </Modal>
          </span>
        );
    }
}



export default CommentBtn;