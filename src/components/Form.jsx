/* eslint-disable no-console */
import React, {useEffect, useState} from 'react';
import s from './styles/formStyles.css';
import swt from './styles/switcherStyle.css';
import { Error } from './error.jsx';

export const Form = (  {setFormValue}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [postCode, setPostCode] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [country, setCountry] = useState('');
  const [agree, setAgree] = useState(false);
  const [gender, setGender] = useState(false);
  const [error, setError] = useState({});
  const gen = (gender === true) ? "female" : "male";

  useEffect(() => {
    validate();
    console.log(firstName === undefined);
    
  }, [firstName, lastName, postCode, birthDate, agree, country]);

  const validate = () => {
    setError({});
    if (!agree) {
      setError((state) => ({...state, agree}));
    }
    if (firstName === "") {
      setError((state) => ({...state, firstName}));
    }
   
    if (lastName === "") {
      setError((state) => ({...state, lastName}));
    }
    if (postCode === "") {
      setError((state) => ({...state, postCode}));
    }
    if (birthDate === "") {
      setError((state) => ({...state, birthDate}));
    }
    if (country === "") {
      setError((state) => ({...state, country}));
    }
    
  }

  const handlerSubmit = (event) => {
    event.preventDefault();

    if (Object.keys(error).length === 0){
    setFormValue(state => [...state, {  firstName, lastName, postCode, birthDate, country, agree, gen}]);
    // console.log(`${firstName} -- ${lastName} -- ${postCode} -- ${birthDate} -- ${country} -- ${agree} -- ${gen} `);
    }
  }

  return (
    
            <form  className={s.form} onSubmit={handlerSubmit}>
              
                <label className={s.label} htmlFor='firstName'>
                   Name: {error.firstName !== undefined && <Error/>}
                    <div>
                      <input type="text" name='firstName' value={firstName} onChange={(event) => setFirstName(event.target.value)} />
                    </div>
                </label>

                <label className={s.label} htmlFor='lastName'>
                   LastName: {error.lastName !== undefined && <Error/>}
                  <div>
                    <input type="text" name='lastName' value={lastName} onChange={(event) => setLastName(event.target.value)} />
                  </div> 
                </label>

                <label className={s.label} htmlFor='postCode'>
                  Post code: {error.postCode !== undefined && <Error/>}
                  <div>
                    <input type="text" name="postCode" value={postCode} onChange={(event) => setPostCode(event.target.value)} />
                  </div> 
                </label>

                <label className={s.label} htmlFor='birthDate'>
                  Birth date: {error.birthDate !== undefined && <Error/>}
                  <div>
                    <input type="date" name='birthDate' value={birthDate} onChange={(event) => setBirthDate(event.target.value)} />
                  </div> 
                </label>

                <label className={s.label} htmlFor='country'>
                  Country: {error.country !== undefined && <Error/>}
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
                    <input name='agreement' type="checkbox" value={agree} onChange={() => setAgree(prev => !prev)} />
                    I agree to the processing of personal data {error.agree !== undefined && <span className={s.error}>* agree shoud be check</span>}
                </label>
    
                <div style={{marginLeft: "20px"}}>

                <div style={{marginTop: "10px"}}>Choose gender:
                  <br />{gen}
                </div>
                <input type="checkbox" id="switch" name='switch' className={swt.checkbox} value={gender}  onChange={() => setGender((prev) => !prev)} />
               
                <label htmlFor="switch" className={swt.toggle}></label>
               

               <div style={{marginTop: "20px"}}>
                   <input className={s.btn} type="submit" value="Send" />
                </div>
              </div>
                   </form>

  );
};
