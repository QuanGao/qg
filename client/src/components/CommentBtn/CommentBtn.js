import React from 'react'
import {Modal, Button, Icon, Input} from 'antd';
import "./CommentBtn.css";
import API from "../../utils/API"
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
        API.saveNote(this.props.projectId, {content:this.state.commentInput})
            .then(response => {
                if(!response.data.errors){
                    this.setState({
                        visible: false
                    })
                }else{
                    console.log(`save comment error message ${response.data.errors.content.message}`)
                }
            })
        }
      handleCancel = () => {
        console.log('Clicked cancel button');
        this.setState({
          visible: false,
        });
      }
      render() {
        const { visible } = this.state;
        const IconText = ({ type, text }) => (
            <span>
              <Icon type={type} style={{ marginRight: 8 }} onClick={this.showModal} />
              {text}
            </span>
        );
        return (
          <div>
            <IconText type="message" text={this.props.notes.length} />
            <Modal title={this.props.projectName}
              visible={visible}
              onOk={this.handleOk}
              onCancel={this.handleCancel}
            >
            
            <h4 onClick={this.handleAddCommentsBtn} style={{color: "#1a8fff"}}><Icon type="plus-circle-o" /> Comment </h4>
            {this.state.showCommentInput && <TextArea name="commentInput" onChange={this.handleCommentInput} placeholder="Any suggestion or comment is welcome" autosize />}

            {this.props.notes.length>0?<SimpleList data={this.props.notes}/>: null}
                               

            </Modal>
          </div>
        );
      }
}



export default CommentBtn;

                      