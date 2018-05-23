import React from 'react'
import { Form, Input, Tooltip, Icon, Button } from 'antd';
import "./ContactForm.css"
import API from "../../utils/API"
import Notification from "../Notification";
import successGif from "./images/newpikachu.gif"
import errorGif from "./images/original.gif"
const FormItem = Form.Item;
const { TextArea } = Input;
const text = <span>quangaowork@gmail.com</span>;

class ContactForm extends React.Component {
  state = {
    messageSent: "",
    notifyGif:"",
    notifyMsg:""
  };

  handleLeaveMsgClick = () => {
    this.setState({messageSent:""})
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
            console.log('Received values of form: ', values);      
            API.submitMessage(values).then(response=>{
                if(response.data.status==="OK"){
                    this.setState({
                        messageSent:"success",
                        notifyGif:successGif,
                        notifyMsg:"Thank you for reaching out to me! I will get in touch with you shortly"
                    })
                }else{
                    this.setState({
                        messageSent:"error",
                        notifyGif:errorGif,
                        notifyMsg:"Hmm, that didn't quite go through, please contact me via email"
                    })
                }
           })           
        } 
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 4 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 20 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
        span: 20,
        offset: 4,
        }, 
      },
    };

    return (
    <Form onSubmit={this.handleSubmit} className="contact-form">
            <FormItem>
                <h1>Contact Me</h1>
                <p>
                    <Tooltip placement="topLeft" title={text}>
                        <Icon type="mail" style={{ fontSize: 16}}/>
                    </Tooltip>
                    <span> / leave a message here</span>
                </p> 
            </FormItem>
            {this.state.messageSent===""? (
            <div>
                <FormItem {...formItemLayout} label="Name">             
                    {getFieldDecorator('name', {
                        rules: [{
                        required: true, message: 'Please enter your name!',
                        }],
                    })(
                        <Input />
                    )}
                </FormItem>
                <FormItem {...formItemLayout} label="E-mail">
                    {getFieldDecorator('email', {
                        rules: [{
                        type: 'email', message: 'The input is not valid E-mail!',
                        }, {
                        required: true, message: 'Please input your E-mail!',
                        }],
                    })(
                    <Input />
                )}
                </FormItem>    
                <FormItem {...formItemLayout} label="Message">               
                    {getFieldDecorator('message', {
                            rules: [{
                            required: true, message: 'Talk coding to me :P',
                            }],
                        })(
                            <TextArea rows={6} />
                        )}
                    </FormItem>
                <FormItem {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit">Send</Button>
                </FormItem>
            </div>):
        <Notification notifyMsg={this.state.notifyMsg} notifyGif={this.state.notifyGif}/>
        }
    </Form>
    );
  }
}

const WrappedContactForm = Form.create()(ContactForm);

export default WrappedContactForm