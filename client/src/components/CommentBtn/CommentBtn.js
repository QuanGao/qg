import React from 'react'
import {Modal, Button, Icon} from 'antd';
import "./CommentBtn.css";
import API from "../../utils/API"

class CommentBtn extends React.Component { 
    // constructor(props) {
    //     super(props)
    // }
    // handleClicComments = () => {
    //     const notes = this.props.notes

    // }
    // handleSubmitComment = (projectId,content) => {
    //     API.saveNote(projectId,content).then(
    //         response=>console.log(response)
    //     )
    // }
    // render () {
    //     return (
    //         <div>
    //         <IconText onclick={this.handleClicComments} type="message" text={this.props.notes.length} />
    //         <CommentModal/>
    //         </div>
    //     )
    // }
    state = {
        ModalText: this.props.notes[0],
        visible: false,
        confirmLoading: false,
      }
      showModal = () => {
        this.setState({
          visible: true,
        });
      }
      handleOk = () => {
        this.setState({
          ModalText: 'The modal will be closed after two seconds',
          confirmLoading: true,
        });
        setTimeout(() => {
          this.setState({
            visible: false,
            confirmLoading: false,
          });
        }, 2000);
      }
      handleCancel = () => {
        console.log('Clicked cancel button');
        this.setState({
          visible: false,
        });
      }
      render() {
        const { visible, confirmLoading, ModalText } = this.state;
        const IconText = ({ type, text }) => (
            <span>
              <Icon type={type} style={{ marginRight: 8 }} onClick={this.showModal} />
              {text}
            </span>
        );
        return (
          <div>
            {/* <Button type="primary" onClick={this.showModal}>Open</Button> */}
            <IconText type="message" text={this.props.notes.length} />
            {/* <Icon type="message" onClick={this.showModal} /> */}
            <Modal title="Title"
              visible={visible}
              onOk={this.handleOk}
              confirmLoading={confirmLoading}
              onCancel={this.handleCancel}
            >
              {/* <p>{ModalText}</p> */}
              <p>{this.props.notes.length>0?this.props.notes[0].content:""}</p>
            </Modal>
          </div>
        );
      }
}



export default CommentBtn;

                      