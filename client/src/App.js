import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom"
import Header from "./components/Header";
import Intro from "./components/Intro";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";


class App extends Component {
  render() {
    return (
    <Router>
        <div className="App">
            <Header/>
            {/* <Intro/> */}
                {/* <Route exact path="/" component={Home}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/contact" component={Contact}/> */}
            {/* <Footer/> */}
        </div>
    </Router>
    );
  }
}

export default App;
