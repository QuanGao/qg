import React from 'react'
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';
import "./ContactForm.css"
const FormItem = Form.Item;
const Option = Select.Option;
const { TextArea } = Input;

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
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        }, 
      },
    };

    return (
      <Form onSubmit={this.handleSubmit} className="contact-form">
      
        <FormItem {...formItemLayout} label={(<span>Name&nbsp; </span>)}>             
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
        
        <FormItem {...formItemLayout} label={(<span>Message&nbsp;</span>)}>               
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