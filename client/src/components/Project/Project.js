import React from 'react'
// import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import MyFooter from "../MyFooter"
import { Layout} from 'antd';
import "./Project.css";

import LoadMoreList from "../LoadMoreList";
import FancyList from "../FancyList";

const { Header, Content} = Layout;
class Project extends React.Component {
    constructor(props) {
        super(props)
    }
    renderProjects = (projectType)=>{
        return projectType==="3"? <LoadMoreList/>:<FancyList/>
    }
    render() {
        return (
            <Layout className="content-wrapper">
                <Header style={{ background: '#fff', padding: 0 }} />
                <Content style={{ margin: '0 16px' }}>
                    <h1>Project page</h1>
                    {this.renderProjects(this.props.projectType)}
                    <FancyList/>
                </Content>
                <MyFooter/> 
            </Layout>
        )
    }
}

export default Project;

                      