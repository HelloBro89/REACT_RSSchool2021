import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { CSSTransition } from 'react-transition-group';
// import './test.css';
import s from './test.css'



export const Header = () => {
    const [show, setShow] = useState(false);

    const test = () => {
        // e.preventDefault();
        console.log("test");
        setShow(!show);
    }


    return (
        <div style={{ fontSize: '30px' }}>
            <div className='eee' id='test'>TEST</div>
            <nav>
                <NavLink style={{ marginLeft: '40px' }} activeStyle={{ color: "green", fontWeight: "bold" }} exact to='/' onClick={(e) => test(e)}> Home </NavLink>
                <NavLink style={{ marginLeft: '40px' }} activeStyle={{ color: "green", fontWeight: "bold" }} to='/about' onClick={(e) => test(e)}> About </NavLink>
            </nav>

            <CSSTransition
                in={show}
                timeout={1000}
                className={{ ...s.alert }}
                unmountOnExit>
                <h1>HELLO world</h1>
            </CSSTransition>

        </div >
    )
}