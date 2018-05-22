import React from 'react'
import { Layout} from 'antd';
import "./Contact.css";
import MyFooter from "../MyFooter"
import ContactForm from "../ContactForm"

const {Content} = Layout;
class Contact extends React.Component {
    render() {   
        return (      
            <Layout className="contact-wrapper">
                <Content style={{ margin: '0 16px' }}>      
                    <div style={{maxWidth:700, padding:"30px 30px 20px 20px"}} className="contact">
                        <ContactForm/>
                    </div> 
                </Content> 
                <MyFooter backgroundColor="#ffb306"/>
            </Layout>
        )
    }
}

export default Contact;