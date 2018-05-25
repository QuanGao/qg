import React from 'react'
import { Layout, Menu, Icon} from 'antd';
import "./Sider.css";
import Home from "../Home"
import Skills from "../Skills"
import Contact from "../Contact"
import Project from "../Project"
import LoadMoreList from "../LoadMoreList"
import FancyList from "../FancyList"
import ProgressBar from "../ProgressBar"

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
    };
    renderMenuItem = (key) => {
        switch(key) {
            case "1":
                return <Home/>;
            case "2":
                return <Skills/>;
            case "3":
                return <LoadMoreList/>;
            case "4":
                return <FancyList/>;
            case "5":
                return <ProgressBar progressBarTitle="Redirecting to Quan's Github...."/>;
            case "6":
                return <ProgressBar progressBarTitle="Redirecting to Quan's Linkedin..."/>;
            default:
                return <Home/>;
        }
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
                        <Menu.Item key="3">
                            <Icon type="user" />
                            <span>Solo Work</span>
                        </Menu.Item>
                        <Menu.Item key="4">
                            <Icon type="team" />
                            <span>Collaboration</span>
                        </Menu.Item>
                        <Menu.Item key="5">
                            <Icon type="form" />
                            <span>Contact</span>
                        </Menu.Item>
                        <Menu.Item key="6">
                            <a href="https://github.com/QuanGao">
                                <Icon type="github" />
                                <span>Github</span>
                            </a>
                        </Menu.Item>
                        <Menu.Item key="7">
                            <a href="https://www.linkedin.com/in/quan-gao-code">
                                <Icon type="linkedin" />
                                <span>Linkedin</span>
                            </a>
                        </Menu.Item>

                    </Menu>
                </Sider>  
                {this.renderMenuItem(this.state.activeKey)}          
            </Layout>
        );
    }
}
export default SiderDemo;