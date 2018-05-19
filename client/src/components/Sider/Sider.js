import React from 'react'
import { Layout, Menu, Icon, Row, Col } from 'antd';
import "./Sider.css";
import Home from "../Home"
import Skills from "../Skills"
import Contact from "../Contact"
import Project from "../Project"


const {Sider } = Layout;
const SubMenu = Menu.SubMenu;

class SiderDemo extends React.Component {
    state = {
        collapsed: false,
        activeKey: "1"
    };
    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({ collapsed });
    };
    handleClick = (event) => {
        this.setState({activeKey: event.key})
    }
    render() {
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>        
                    <div className="logo">
                        {this.state.collapsed? (<h1>QG</h1>):(<h1>Quan Gao</h1>)}          
                    </div>
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" onClick={this.handleClick}>
                        <Menu.Item key="1">
                            <Icon type="smile-o" />
                            <span>Who?</span>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Icon type="tool" />
                            <span>Skills</span>
                        </Menu.Item>
                        <SubMenu key="sub1" title={<span><Icon type="user" /><span>Solo Work</span></span>}>              
                            <Menu.Item key="4">Project1</Menu.Item>
                            <Menu.Item key="5">Project2</Menu.Item>
                            <Menu.Item key="6">Project3</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" title={<span><Icon type="team" /><span>Team Projects</span></span>}>                         
                            <Menu.Item key="7">RoomieU</Menu.Item>
                            <Menu.Item key="8">GetAway</Menu.Item>
                            <Menu.Item key="9">DinnerSavior</Menu.Item>
                        </SubMenu>
                        <Menu.Item key="3">
                            {/* <Icon type="mail" /> */}
                            <Icon type="form" />
                            <span>Contact</span>
                        </Menu.Item>
                        <Menu.Item key="10">
                            {/* <Icon type="mail" /> */}
                            <a href="https://github.com/QuanGao">
                                <Icon type="github" />
                                <span>Github</span>
                            </a>
                        </Menu.Item>
                        <Menu.Item key="11">
                            {/* <Icon type="mail" /> */}
                            <a href="https://www.linkedin.com/in/quan-gao-code">
                                <Icon type="linkedin" />
                                <span>Linkedin</span>
                            </a>
                        </Menu.Item>

                    </Menu>
                </Sider>
                {this.state.activeKey==="1" ? <Home collapsed={this.state.collapsed}/>: 
                    (this.state.activeKey==="2" ? <Skills/>:
                    (this.state.activeKey==="3" ?<Contact/>:
                    (this.state.activeKey!=="10" && this.state.activeKey!=="11"?<Project/>:"")))}
            </Layout>
        );
    }
}
export default SiderDemo;