import React from 'react'
import { Layout, Menu, Icon } from 'antd';
import "./Sider.css";
import ContentWrapper from "../ContentWrapper"
const {Sider } = Layout;
const SubMenu = Menu.SubMenu;

class SiderDemo extends React.Component {
    state = {
        collapsed: false,
    };
    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({ collapsed });
    }
    render() {
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>        
                    <div className="logo">
                        {this.state.collapsed? (<h1>QG</h1>):(<h1>Quan Gao</h1>)}          
                    </div>
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        <Menu.Item key="1">
                            <Icon type="smile-o" />
                            <span>Who?</span>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Icon type="tool" />
                            <span>Skills</span>
                        </Menu.Item>
                        <SubMenu key="sub1" title={<span><Icon type="user" /><span>Solo Work</span></span>}>              
                            <Menu.Item key="3">Tom</Menu.Item>
                            <Menu.Item key="4">Bill</Menu.Item>
                            <Menu.Item key="5">Alex</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" title={<span><Icon type="team" /><span>Team Projects</span></span>}>                         
                            <Menu.Item key="6">Team 1</Menu.Item>
                            <Menu.Item key="8">Team 2</Menu.Item>
                        </SubMenu>
                        <Menu.Item key="9">
                            <Icon type="profile" />
                            <span>Resume</span>
                        </Menu.Item>
                        <Menu.Item key="10">
                            <Icon type="mail" />
                            <span>Contact</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <ContentWrapper/>
            </Layout>
        );
    }
}

export default SiderDemo;
