import React from 'react'
import { Layout, Col, Row } from 'antd';
import "./Home.css";
import MyFooter from "../MyFooter"

const {Content} = Layout;
class Home extends React.Component {
    render() {
        return (
            <Layout className="home">
                <Content style={{ margin: '0 16px' }}>                   
                    <Row className="bio-row">
                    <Col span={24} >
                    <div className="bio" >
                        <h1> About me </h1>
                        <p>
                            Hello there! I'm Quan, a software engineer, biologist &amp; avid learner. 
                            In my current job, I work primarily as a front end developer specializing in React and JQuery. 
                            I also enjoy the occasional opportunity to dabble in some back end development.
                            
                            Outside of work, I have also built full stack projects with technologies such as 
                            React, Node.js, Express, MongoDB, mySQL, Firebase, and etc. 

                            In the future, I'd like to become proficient with object oriented languages and 
                            gain deeper experience in the back end development area.
                        </p>
                        <p>
                            Prior to software development, I worked in the biomedical research field for several years.
                            First as a graduate student at the University of Chicago studying muscular dystrophy and 
                            later as a researcher at Northwestern University investigating potential cures for cancer.
                        </p>
                    </div>
                    </Col>
                    </Row>
                </Content>
                <MyFooter/>
            </Layout>
        )
    }
}

export default Home;