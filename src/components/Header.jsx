import React from 'react';
import { NavLink, Switch, Route, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import { Dashboard } from './Dashboard.jsx';
import { About } from "./About.jsx";
import { NotFound } from "./NotFound.jsx";

import './animation.css';
// import s from './test.css'



export const Header = () => {
    const location = useLocation();

    return (
        <div style={{ fontSize: '30px' }}>
            <nav>
                <NavLink style={{ marginLeft: '40px' }} activeStyle={{ color: "green", fontWeight: "bold" }} exact to='/' /* onClick={() => handleHome()} */> Home </NavLink>
                <NavLink style={{ marginLeft: '40px' }} activeStyle={{ color: "green", fontWeight: "bold" }} to='/about' /* onClick={() => handleAbout()} */> About </NavLink>
            </nav>
            <TransitionGroup>
                <CSSTransition
                    key={location.key}
                    classNames="alert"
                    timeout={{
                        appear: 500,
                        enter: 300,
                        exit: 0,
                    }}>

                    <Switch>
                        <Route exact path="/" component={Dashboard} />
                        <Route exact path="/about/" component={About} />
                        <Route component={NotFound} />
                    </Switch>
                </CSSTransition >
            </TransitionGroup>
        </div >
    )
}