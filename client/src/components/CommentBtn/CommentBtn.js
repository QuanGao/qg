import React from 'react'
import {Modal, Button, Icon, Input} from 'antd';
import "./CommentBtn.css";
import API from "../../utils/API"
import SimpleList from "../SimpleList"

const {TextArea} = Input


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
            <Modal title={this.props.projectName}
              visible={visible}
              onOk={this.handleOk}
              confirmLoading={confirmLoading}
              onCancel={this.handleCancel}
            >
            {this.props.notes.length>0?
                <div><h3 style={{color: "#1a8fff"}}><Icon type="plus-circle-o" /> Comment </h3><SimpleList data={this.props.notes}/></div>: 
                <div><h3 style={{color: "#1a8fff"}}><Icon type="plus-circle-o" /> Comment </h3></div>}
                               
                {/* <TextArea placeholder="Autosize height based on content lines" autosize /> */}

            </Modal>
          </div>
        );
      }
}



export default CommentBtn;

                      