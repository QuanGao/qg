import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom"
import Header from "./components/Header";
import Intro from "./components/Intro";
import Footer from "./components/Footer"
class App extends Component {
  render() {
    return (
    <Router>
        <div className="App" id="container">
            <Header/>
            <Intro/>
            <Footer/>
        </div>
    </Router>
    );
  }
}

export default App;
