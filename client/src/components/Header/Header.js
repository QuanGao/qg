
import "./Header.css";

import React from 'react'

import {NavLink} from "react-router-dom"

const Header = () => (
    <div id="header">            
        <div id="title">
            <p>
                <a href="index.html"><strong>Quan Gao</strong> &nbsp; Coding, Learning &amp; Sciencing </a>
            </p>
        </div> 
        <div id="main-nav">
            <p>
                <NavLink exact to="/" activeClassName="is-active">Home</NavLink><span class="bullet2"></span>  
                <NavLink to="/about" activeClassName="is-active">About</NavLink><span class="bullet"></span> 
                <NavLink to="/contact" activeClassName="is-active">Contact</NavLink>
            </p>
        </div>       
        <div id="top-line"></div>
    </div>
)

export default Header

