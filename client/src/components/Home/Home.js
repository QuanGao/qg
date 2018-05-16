import React from 'react'
import { Layout} from 'antd';
import "./Home.css";

const {Content, Footer} = Layout;
class Home extends React.Component {
    render() {
        return (
            <Layout className="home">
                <Content style={{ margin: '0 16px' }}>
                    <div className="bio" style={{left: this.props.collapsed?"360px":"300px"}} >
                        <h1> About me </h1>
                        <p>Hello there! I'm Quan, a full stack web developer and avid learner. 
                        I am pretty comfortable throughout the <strong> MERN </strong>stack. Outside of MERN, 
                        I have also built projects with <strong> mySQL </strong> and <strong>firebase </strong>.</p>
                        <p>Writing clean code and designing optimal solutions to challenging 
                        problems give me great satisfaction. For me, spending time solving algorithm 
                        puzzles is a total treat. I am very excited to embark on a new journey into software/web development. 
                        In my other life, I hold a PhD degree in biology from the University of Chicago and do research for a living.</p>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center'}}>
                    Quan Gao ©2018 Web development Portfolio
                </Footer>
            </Layout>
        )
    }
}

export default Home;