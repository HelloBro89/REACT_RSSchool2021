import React from 'react';
import cs from './styles/cardsStyle.css';

export const Cards = (props) => (

        <div className={cs.card}>
            <br/>Name: {props.item.firstName}
            <br/>LastName: {props.item.lastName}
            <br/>Post code: {props.item.postCode}
            <br/>Birth date: {props.item.birthDate}
            <br/>Country: {props.item.country}
            {/* <br/>Agree: {props.item.agree} */}
            <br/>Gender: {props.item.gen}
        </div>

  );
