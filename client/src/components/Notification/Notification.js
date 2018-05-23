import React from 'react'
import "./Notification.css";
import {Col, Row, Icon} from "antd"

const Notification = (props) => (
    <div className="notification">
    <Row>
        <Col span={24}>
        <img src={props.notifyGif} alt="profile" />
        </Col>
    </Row>
    <Row>
        <Col span={24}>
        <h1> 
            {props.notifyMsg} <Icon type="message" />
        </h1> 
        </Col>
    </Row>
    </div>
)

export default Notification;

                      