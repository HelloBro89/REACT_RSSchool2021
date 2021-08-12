/* eslint-disable no-console */
import React, {useState, useEffect} from 'react';
import {Form} from './Form.jsx';
import {Cards} from './Cards.jsx';
import cs from './styles/cardsStyle.css';

export const App = () =>{
    const [formValue, setFormValue] = useState([]);

    useEffect(() => {    
        // console.log(document.getElementById('main').offsetLeft);
      });

    return (
        <div id='main' >
            
            <Form setFormValue={setFormValue}/>
           <div className={cs.container}>
            {
                formValue.map((item, ind) => <Cards item={item} key={ind}/>)
            }
            </div>
          
        </div>
    )
     }