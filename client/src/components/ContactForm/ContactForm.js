import React from 'react'
import { Divider,Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';
import "./ContactForm.css"
const FormItem = Form.Item;
const Option = Select.Option;
const { TextArea } = Input;
const text = <span>quangaowork@gmail.com</span>;

class RegistrationForm extends React.Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const { autoCompleteResult } = this.state;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        // sm: { span: 8 },
        sm: { span: 4 },
      },
      wrapperCol: {
        xs: { span: 24 },
        // sm: { span: 16 },
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
        //   span: 16,
        //   offset: 8,
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
      </Form>
    );
  }
}

const WrappedRegistrationForm = Form.create()(RegistrationForm);

export default WrappedRegistrationForm