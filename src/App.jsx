import React from "react";
import {
    BrowserRouter as Router, Switch, Route
} from "react-router-dom";
import { Dashboard } from './components/Dashboard.jsx';
import { About } from "./components/About.jsx";
import { NotFound } from "./components/NotFound.jsx";
// import { Test } from './components/Test.jsx';

export const App = () => (

    <Router>
        <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/about/" component={About} />

            <Route component={NotFound} />
        </Switch>
    </Router>

)
