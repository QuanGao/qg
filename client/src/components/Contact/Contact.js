import React from 'react'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';


import "./Contact.css";
import MyFooter from "../MyFooter"
import ContactForm from "../ContactForm"

const { Header, Content} = Layout;
class Contact extends React.Component {
    


    render() {
       
        return (
            <Layout className="content-wrapper">
                {/* <Header style={{ background: '#fff', padding: 0 }} /> */}
                <Content style={{ margin: '0 16px' }}>
                    
                <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                    <ContactForm/>
                </div> 



                </Content> 
                <MyFooter/>
            </Layout>
        )
    }
}

export default Contact;