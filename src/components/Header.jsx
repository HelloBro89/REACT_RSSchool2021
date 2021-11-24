import React from 'react';
import { Switch, Route, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Dashboard } from './Dashboard.jsx';
import { About } from "./About.jsx";
import { Details } from "./Details.jsx";
import { NotFound } from "./NotFound.jsx";
import { Navigate } from './Navigate.jsx';
import './styles/animation.css';

export const Header = () => {
    const location = useLocation();

    return (
        <div style={{ fontSize: '30px'}}>
            <div>
                <Navigate />
            </div>
            
            <TransitionGroup>
                <CSSTransition
                    key={location.key}
                    classNames="alert"
                    timeout={{
                        appear: 500,
                        enter: 300,
                        exit: 0,
                    }}
                    unmountOnExit>

                    <Switch>
                        <Route exact path="/">
                            <Dashboard/>
                        </Route>

                        <Route exact path="/about/">
                            <About />
                        </Route>

                        <Route exact path='/details/:id'>
                            <Details/>
                        </Route>

                        <Route component={NotFound}/>

                    </Switch>
                </CSSTransition >
            </TransitionGroup>
        </div>

    )
}