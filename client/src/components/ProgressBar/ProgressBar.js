import React from 'react'
import { Layout, Progress } from 'antd';
import "./ProgressBar.css";

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
        clearInterval(this.interval);
    };

    render(){
        return (
            <div style={{width:500, margin:"auto"}}>
                <h1> {this.props.progressBarTitle} </h1>
                <Progress percent={this.state.percent} showInfo={false} />
            </div>
        )}
}


export default ProgressBar;

                      