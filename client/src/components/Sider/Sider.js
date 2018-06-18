import React from 'react'
import { Layout, Menu, Icon} from 'antd';
import "./Sider.css";
import Home from "../Home"
import Skills from "../Skills"
import Contact from "../Contact"
import Project from "../Project"
import { Route, Switch, Link } from "react-router-dom"

const {Sider } = Layout;

class SiderDemo extends React.Component {
    state = {
        collapsed: false
    };
    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({ collapsed });
    };
    render() {
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>         
                    <div className="logo">
                        {this.state.collapsed? (<h1>QG</h1>):(<h1>Quan Gao</h1>)}          
                    </div>
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        
                        <Menu.Item key="1">
                            <Link to="/">
                                <Icon type="smile-o" />
                                <span>Who?</span>
                            </Link>
                        </Menu.Item>
                        
                        <Menu.Item key="2">
                            <Link to="/skills">
                                <Icon type="tool" />
                                <span>Skills</span>
                            </Link>
                        </Menu.Item>

                        <Menu.Item key="3">
                            <Link to="/project/solo">
                                <Icon type="user" />
                                <span>Solo Work</span>
                            </Link>
                        </Menu.Item>

                        <Menu.Item key="4">
                            <Link to="/project/team">
                                <Icon type="team" />
                                <span>Collaboration</span>
                            </Link>
                        </Menu.Item>

                        <Menu.Item key="5">
                            <Link to="/contact">
                                <Icon type="form" />
                                <span>Contact</span>
                            </Link>
                        </Menu.Item>

                        <Menu.Item key="6">                  
                            <a href="https://github.com/QuanGao" target="_blank" rel="noopener noreferrer">
                                <Icon type="github" />
                                <span>Github</span>
                            </a>
                        </Menu.Item>

                        <Menu.Item key="7">
                            <a href="https://www.linkedin.com/in/quan-gao-code" target="_blank" rel="noopener noreferrer">
                                <Icon type="linkedin" />
                                <span>Linkedin</span>
                            </a>
                        </Menu.Item>
                    </Menu>
                </Sider>  

            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/skills" component={Skills}></Route>
                <Route exact path="/project/:type" component={Project}></Route>
                <Route exact path="/contact" component={Contact}></Route>                
            </Switch>    

            </Layout>
        );
    }
}
export default SiderDemo;