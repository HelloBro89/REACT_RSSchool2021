import React from "react";
import {
    BrowserRouter as Router, Switch, Route
} from "react-router-dom";
import { Dashboard } from './components/Dashboard.jsx';
import { About } from "./components/About.jsx";
import { NotFound } from "./components/NotFound.jsx";
import { Header } from './components/Header.jsx';

export const App = () => (
    <Router>
        <Header />
        <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/about/" component={About} />
            <Route component={NotFound} />
        </Switch>
    </Router>
)


