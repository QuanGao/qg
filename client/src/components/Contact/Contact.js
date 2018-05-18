import React from 'react'
import { Layout, Menu, Breadcrumb, Icon, Row, Col } from 'antd';


import "./Contact.css";
import MyFooter from "../MyFooter"
import ContactForm from "../ContactForm"

const { Header, Content} = Layout;
class Contact extends React.Component {
    
    // content-wrapper background: '#fff', padding: 0, minHeight: 360, marginTop:100, maxWidth: 800 
    //style={{maxWidth:600, marginTop: 80, marginLeft:"auto",marginRight:"auto"}}

    render() {
       
        return (
            <Layout className="content-wrapper">
                {/* <Header style={{ background: '#fff', padding: 0 }} ></Header> */}

                <Content style={{ margin: '0 16px' }}>
                
                <div className="contact">
                    {/* <Row> */}
                        {/* <Col span={18}> */}
                        <div style={{width:450, margin:"auto"}}>
                            <h1>Contact</h1>
                            <h4>
                            Write to me at quangaowork@gmail.com or use the form below.
                            </h4>
                        </div>
                        {/* </Col> */}
                        {/* <Col span={3}/> */}
                    {/* </Row> */}
                    <ContactForm/>
                </div> 



                </Content> 
                <MyFooter/>
            </Layout>
        )
    }
}

export default Contact;