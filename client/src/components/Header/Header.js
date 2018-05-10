
import "./Header.css";

import React from 'react'

const Header = () => (
    <div id="header">            
        <div id="title">
            <p>
                <a href="index.html"><strong>Quan Gao</strong> &nbsp; Coding, Learning &amp; Sciencing </a>
            </p>
        </div> 
        <div id="main-nav">
            <p>
                <a href="index.html">Home</a> <span class="bullet2">&bull;</span> 
                <a href="about.html">About</a> <span class="bullet">&bull;</span> 
                <a href="contact.html">Contact</a>
            </p>
        </div>       
        <div id="top-line"></div>
    </div>
)

export default Header

