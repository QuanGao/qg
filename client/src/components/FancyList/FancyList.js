import React from 'react'
import { Layout } from 'antd';
import "./FancyList.css";

const { Footer} = Layout;

const MyFooter = (props) => (
    <Footer style={{ textAlign: 'center', backgroundColor: props.backgroundColor }}>
        Quan Gao ©2018 Web development Portfolio    
    </Footer> 
)

export default MyFooter;

                      