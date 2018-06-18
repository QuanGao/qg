import React, { Component } from 'react';
import './App.css';
import Sider from "./components/Sider";
import { BrowserRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <div className="App">
                <Sider/> 
            </div>  
        </BrowserRouter>
    );
  }
}

export default App;
