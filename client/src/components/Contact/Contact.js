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
            <Layout className="contact-wrapper">
                {/* <Header style={{ background: '#fff', padding: 0 }} ></Header> */}

                <Content style={{ margin: '0 16px' }}>
                
              
                    {/* <Row> */}
                        {/* <Col span={18}> */}
                        <div style={{maxWidth:700, padding:"20px 20px 20px 20px"}} className="contact">
                            {/* <h1>Contact</h1>
                            <h4>
                            Feel free to write to me at quangaowork@gmail.com or use the form below.
                            </h4> */}
                            <ContactForm/>
                            
           
                        
                        {/* </Col> */}
                        {/* <Col span={3}/> */}
                    {/* </Row> */}
                    {/* <ContactForm/> */}
                </div> 



                </Content> 
                <MyFooter/>
            </Layout>
        )
    }
}

export default Contact;