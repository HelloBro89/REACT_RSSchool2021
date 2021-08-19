import React from 'react';
import { /* Switch, Route, useLocation, */ NavLink } from "react-router-dom";

export const Navigate = () => (
    <nav>
        <NavLink style={{ marginLeft: '40px' }} activeStyle={{ color: "green", fontWeight: "bold" }} exact to='/'> Home </NavLink>
        <NavLink style={{ marginLeft: '40px' }} activeStyle={{ color: "green", fontWeight: "bold" }} to='/about'> About </NavLink>
    </nav >
)