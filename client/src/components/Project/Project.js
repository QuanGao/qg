import React from 'react'
import MyFooter from "../MyFooter"
import { Layout} from 'antd';
import "./Project.css";

import ProjectList from "../ProjectList";
import FancyList from "../FancyList";

const { Header, Content} = Layout;
class Project extends React.Component {
    constructor(props) {
        super(props)
    }

    renderProjectContent = (projectType) => {
        return projectType==="3"? <ProjectList/>:<FancyList/>
            
    }
    renderProjectHeader = (projectType) => {
        return projectType==="3"? <h1>Independent Projects</h1>:<h1>Team Projects</h1>
    }
    render() {
        return (
            <Layout className="content-wrapper">
                <Header style={{ background: '#fff', padding: 0 }} >
                    {this.renderProjectHeader(this.props.projectType)}
                </Header>
                <Content style={{ margin: '0 16px', padding:20}}>                   
                    {this.renderProjectContent(this.props.projectType)}
                </Content>
                <MyFooter/> 
            </Layout>
        )
    }
}

export default Project;

                      