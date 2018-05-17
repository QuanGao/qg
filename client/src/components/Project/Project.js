import React from 'react'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import "./Project.css";


const { Header, Content, Footer} = Layout;
class Project extends React.Component {
    state = {
      collapsed: false,
    };

    render() {
        return (
            <Layout className="content-wrapper">
                <Header style={{ background: '#fff', padding: 0 }} />
                <Content style={{ margin: '0 16px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>User</Breadcrumb.Item>
                    <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>
                    <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                    Project page
                    </div> 
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Quan Gao ©2018 Web development Portfolio
                </Footer> 
            </Layout>
        )
    }
}

export default Project;

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