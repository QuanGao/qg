import React from 'react'
import { Layout, Progress, Row, Col } from 'antd';
import "./ProgressBar.css";
import MyFooter from "../MyFooter";
const {Content} = Layout;
class ProgressBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          percent: 0
        };
    };
    tick() {
        if(this.state.percent <= 100){
            this.setState(prevState => ({
                percent: prevState.percent + 1
                }));
            };
        }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 50);
    };

    componentWillUnmount() {
        this.setState(prevState => ({
            percent: 0
            }));
        clearInterval(this.interval);
    };

    render(){
        return (
            <Layout>
                <Content>
                    <Row style={{maxWidth:800,margin:"auto", padding:20, marginTop:120}}>
                        <Col span={24}>
                            <h1 className="progressBarTitle"> {this.props.progressBarTitle} </h1>
                            <Progress percent={this.state.percent} showInfo={false} />
                        </Col>
                    </Row>
                </Content>
                <MyFooter/> 
            </Layout>
        )}
}


export default ProgressBar;

                      