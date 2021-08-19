import React, { useState } from 'react';
import { NavLink, Switch, Route } from "react-router-dom";
import { CSSTransition } from 'react-transition-group';

import { Dashboard } from './Dashboard.jsx';
import { About } from "./About.jsx";
import { NotFound } from "./NotFound.jsx";

import './animation.css';
// import s from './test.css'



export const Header = () => {
    const [show, setShow] = useState(false);

    const test = () => {
        // e.preventDefault();
        console.log("test");
        setShow(!show);
    }


    return (
        <div style={{ fontSize: '30px' }}>
            <nav>
                <NavLink style={{ marginLeft: '40px' }} activeStyle={{ color: "green", fontWeight: "bold" }} exact to='/' onClick={(e) => test(e)}> Home </NavLink>
                <NavLink style={{ marginLeft: '40px' }} activeStyle={{ color: "green", fontWeight: "bold" }} to='/about' onClick={(e) => test(e)}> About </NavLink>
            </nav>

            <CSSTransition
                in={show}
                timeout={1000}
                classNames='alert'
                unmountOnExit>

                <Switch>
                    <Route exact path="/" component={Dashboard} />
                    <Route exact path="/about/" component={About} />
                    <Route component={NotFound} />
                </Switch>
                {/* <h1>Test animation</h1> */}
            </CSSTransition>



        </div >
    )
}