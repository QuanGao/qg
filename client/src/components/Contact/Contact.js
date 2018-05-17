import React from 'react'
import { Layout, Menu, Breadcrumb, Icon, Row, Col, Input} from 'antd';
import "./Contact.css";
import MyFooter from "../MyFooter"


const { Header, Content} = Layout;
class Contact extends React.Component {
    state = {
      userName: '',
    };
    emitEmpty = () => {
        this.userNameInput.focus();
        this.setState({ userName: '' });
      }
    onChangeUserName = (e) => {
        this.setState({ userName: e.target.value });
      }
    render() {
        const { userName } = this.state;
        const suffix = userName ? <Icon type="close-circle" onClick={this.emitEmpty} /> : null;
        return (
            <Layout className="content-wrapper">
                {/* <Header style={{ background: '#fff', padding: 0 }} /> */}
                <Content style={{ margin: '0 16px' }}>
                    <Row  className="contact">
                        <Col span={8} offset={4}>
                        <Input
                            placeholder="Enter your username"
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            suffix={suffix}
                            value={userName}
                            onChange={this.onChangeUserName}
                            ref={node => this.userNameInput = node}
                        />
                        </Col>
                        <Col span={8} offset={4}>
                            right
                        </Col>
                    </Row>
                </Content> 
                <MyFooter/>
            </Layout>
        )
    }
}

export default Contact;

                        {/* <Menu.Item key="11">
                            <a href="https://github.com/QuanGao">
                                <Icon type="github" />
                                <span>Github</span>
                            </a>
                        </Menu.Item>
                        <Menu.Item key="12">
                            <a href="https://www.linkedin.com/in/quan-gao-code">
                                <Icon type="linkedin" />
                                <span>Linkedin</span>
                            </a>
                        </Menu.Item> */}