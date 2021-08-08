import React, {useState} from 'react';
import {Form} from './Form.jsx';
import {Cards} from './Cards.jsx';
import cs from './styles/cardsStyle.css';

export const App = () =>{
    const [formValue, setFormValue] = useState([]);

    return (
        <div className="App">
            <Form  setFormValue={setFormValue}/>
           <div className={cs.container}>
            {
                formValue.map((item, ind) => <Cards item={item} key={ind}/>)
            }
            </div>
          
        </div>
    )
     }