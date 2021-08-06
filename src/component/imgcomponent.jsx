import React from 'react';
import s from './styles/app.component.css';

const Cards = (props) => (
    <div className={s.card_style}>

        <img className={s.img} src={props.card_path} alt={props.card_name} />

        <div className={s.container}>
            <h4><b> <span style={{color: 'grey'}}>Place: </span>{props.card_place}</b></h4>
            <p className={s.visited}>{props.place_visited} - visited<span className={s.liked}>{props.place_liked} - liked</span> </p>
            <p className= {s.author}> <span style={{color: 'gray'}}> by:</span>{props.author}  </p>
        </div>
    </div>);


export default Cards