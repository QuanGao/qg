import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom"
import Sider from "./components/Sider";

class App extends Component {
  render() {
    return (
    <Router>
        <div className="App">
            <Sider/>
            {/* </Layout> */}
            {/* <Route exact path="/" component={Home}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/contact" component={Contact}/> */}
        </div>        
    </Router>
    );
  }
}

export default App;
