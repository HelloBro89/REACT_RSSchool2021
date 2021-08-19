import React from 'react';
import { /* Switch, Route, useLocation, */ NavLink } from "react-router-dom";

export const Navigate = ({ arrElem }) => (
    <nav>
        <NavLink style={{ marginLeft: '40px' }} activeStyle={{ color: "green", fontWeight: "bold" }} exact to='/'> Home </NavLink>
        <NavLink style={{ marginLeft: '40px' }} activeStyle={{ color: "green", fontWeight: "bold" }} to='/about'> About </NavLink>

        {/* {console.log(arrElem.length)} */}
        {/* {arrElem.length ?
            arrElem.map((el, ind) => (
                <NavLink key={ind} to={`details/${arrElem.author}`} ></NavLink>
            ))
            : null
        } */}
    </nav >
)