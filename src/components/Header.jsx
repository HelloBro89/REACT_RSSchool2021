import React, { useState, useEffect } from 'react';
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
    const [data, setData] = useState([]);

    //     const handleHeader = (e) => {
    // 
    //     }

    return (

        <div style={{ fontSize: '30px' }}>
            {/* {console.log(data)} */}
            <Navigate arrElem={data} />

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
                        <Route exact path="/"  >
                            <Dashboard dataElem={(arrElem) => setData(arrElem)} />
                        </Route>

                        <Route exact path="/about/"  >
                            <About />
                        </Route>

                        <Route exact path='/details/:id'>
                            <Details dataEl={data} />
                        </Route>

                        <Route component={NotFound} />

                    </Switch>
                </CSSTransition >
            </TransitionGroup>
        </div>

    )
}