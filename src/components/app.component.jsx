/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import s from './styles/app.component.css';
import swt from './styles/switcherStyle.css'

class MyComponent extends Component {
  render() {
    return (<div className={s.wrapper}>
{console.log(swt)}
        <div className={s.form}>

            <form className="name" /* event */>
                <label className='item' htmlFor='firstname'>
                    name:
                    <input type="text" name="firstname" value='pasha' />
                </label>
            </form>

            <form className="name" /* event */>
                <label className='item' htmlFor='lastname'>
                    name:
                    <input type="text" name="lastname" value='valoshyn' />
                </label>
            </form>

        </div>



        {/* <div className={s.form}>
       
                <input className={s.input} type="text"  placeholder='Enter your name...'/>
                <input type="text"  placeholder='Enter your lastname...'/>
                <input type='date'/>
                <select name="Country" id="">
                    <option>Сhoose country</option>
                    <option>Belarus</option>
                    <option>Russia</option>
                    <option>Poland</option>
                    <option>Ukrain</option>
                </select>

                <div>
                    <input type="checkbox"/>
                    <span>I agree to the processing of personal data</span>
                </div>

                <div>
                    <span>Male: </span> 
                    <label className={swt.switch}>
                    <input type="checkbox" checked/>
                    <span className={swt.slider}></span>
                    </label>
                </div>
           </div>  */}
        </div>

    );
  }
}


export default MyComponent;