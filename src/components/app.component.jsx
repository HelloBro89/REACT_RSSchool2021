/* eslint-disable no-console */
import React, {useState} from 'react';
import s from './styles/app.component.css';
import swt from './styles/switcherStyle.css'

export const App = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [postCode, setPostCode] = useState('');
  const [birthDate, setBirthDate] = useState();
  const [country, setCountry] = useState('');

  const handlerSubmit = (event) =>{
    event.preventDefault();

    console.log(firstName);
  }

  return (
            <form  className={s.form} onSubmit={handlerSubmit}>

                <label className={s.label} htmlFor='firstName'>
                   Name:
                    <div>
                      <input type="text" name='firstName' value={firstName} onChange={(event) => setFirstName(event.target.value)} />
                    </div>
                </label>

                <label className={s.label} htmlFor='lastName'>
                     LastName:
                  <div>
                    <input type="text" name='lastName' value={lastName} onChange={(event) => setLastName(event.target.value)} />
                  </div> 
                </label>

                <label className={s.label} htmlFor='postCode'>
                  Post code:
                  <div>
                    <input type="text" name="postCode" value={postCode} onChange={(event) => setPostCode(event.target.value)} />
                  </div> 
                </label>

                <label className={s.label} htmlFor='birthDate'>
                  Birth date:
                  <div>
                    <input type="date" name='birthDate' value={birthDate} onChange={(event) => setBirthDate(event.target.value)} />
                  </div> 
                </label>

                <label className={s.label} htmlFor='country'>
                  Country:
                  <div>
                    <select name="country" id="" value={country} onChange={(event) => setCountry(event.target.value)}>
                      <option>Сhoose country</option>
                      <option>Belarus</option>
                      <option>Russia</option>
                      <option>Poland</option>
                     <option>Ukrain</option>
                    </select>
                  </div> 
                </label>

                <label className={s.label} htmlFor='agreement'>
                    <input name='agreement' type="checkbox"/>
                    I agree to the processing of personal data
                </label>

                <div style={{marginTop: "10px"}}>Male:</div>
                <input type="checkbox" id="switch" name='switch' className={swt.checkbox}/>
               
                <label htmlFor="switch" className={swt.toggle}></label>
               

               <div style={{marginTop: "20px"}}>
                   <input className={s.btn} type="submit" value="Send" />
                </div>

                   </form>

  );
};
