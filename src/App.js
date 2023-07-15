import './App.css';
import Header from "./components/common/heading/header";
import {BrowserRouter as Router, Switch} from "react-router-dom";
import React from "react";

function App() {
    return (
        <>
            <Router>
                <Header/>
                <Switch>
                    {/*<Route path="/about">*/}
                    {/*    <About />*/}
                    {/*</Route>*/}
                </Switch>
            </Router>
        </>
    );
}

export default App;
