import React from 'react';
import { NavLink } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { clearData } from './redux/actions/actionArticles.jsx';
import  './styles/styles.css';

export const Navigate = () => {

    const dispatch = useDispatch();

    return (
            <div onClick={ () => dispatch(clearData([])) }>
                <nav>
                    <div className="header">
                        <NavLink style={ { marginLeft: '40px' } } activeStyle={ { color: "green", fontWeight: "bold" } } exact to='/'  >Home</NavLink>
                        <span style={{fontFamily: 'serif', fontStyle: 'italic', fontSize: '40px', fontWeight : '800', color: 'white', paddingLeft: '20px'}}>The latest news</span> 
                        <NavLink style={ { marginRight: '40px' } } activeStyle={ { color: "green", fontWeight: "bold" } } to='/about'>About</NavLink>
                    </div>
                </nav >
            </div>
    )
}