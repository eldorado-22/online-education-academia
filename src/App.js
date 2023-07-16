import './App.css';
import Header from "./components/common/heading/header";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import React from "react";
import Home from "./components/home/Home";
import About from "./components/about/About";

function App() {
    return (
        <>
            <Router>
                <Header/>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/about" exact component={About}/>
                </Switch>
            </Router>
        </>
    );
}

export default App;
