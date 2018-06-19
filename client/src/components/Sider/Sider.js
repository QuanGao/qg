import React from 'react'
import { Layout, Menu, Icon} from 'antd';
import "./Sider.css";
import Home from "../Home"
import Skills from "../Skills"
import Contact from "../Contact"
import { Route, Switch, Link } from "react-router-dom";
import ProjectList from "../ProjectList";
import FancyList from "../FancyList";

const {Sider } = Layout;

class SiderDemo extends React.Component {
    render() {
        const path = window.location.href.split('/')[3] || "home"
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Sider 
                onCollapse={(collapsed, type) => { console.log(collapsed, type)}}
                breakpoint="md"
                collapsedWidth="0"
                >     
                    <div className="logo">
                        <h1>Quan Gao</h1>
                    </div>
                    <Menu theme="dark" defaultSelectedKeys={[`${path}`]} mode="inline">
                           
                        <Menu.Item key="home">
                            <Link to="/">
                                <Icon type="smile-o" />
                                <span>Who?</span>
                            </Link>
                        </Menu.Item>
                        
                        <Menu.Item key="skills">
                            <Link to="/skills">
                                <Icon type="tool" />
                                <span>Skills</span>
                            </Link>
                        </Menu.Item>

                        <Menu.Item key="solo">
                            <Link to="/solo">
                                <Icon type="user" />
                                <span>Solo Work</span>
                            </Link>
                        </Menu.Item>

                        <Menu.Item key="team">
                            <Link to="/team">
                                <Icon type="team" />
                                <span>Collaboration</span>
                            </Link>
                        </Menu.Item>

                        <Menu.Item key="contact">
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

                {/* <Route exact path="/solo" component={ProjectList} ></Route> */}
                <Route exact path="/solo" component={ProjectList} >
                </Route>
                

                <Route exact path="/team" component={FancyList}></Route>
                <Route exact path="/contact" component={Contact}></Route>                
            </Switch>    

            </Layout>
        );
    }
}
export default SiderDemo;