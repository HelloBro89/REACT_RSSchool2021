/* eslint-disable no-console */
import React/* , { useState} */ from 'react';
import s from './styles/app.component.css';

export const App = () => {
  // const [firstName, setFirstName] = React.useState(1);
  const [count, setCount] = React.useState(0);

  // const handlerSubmit = () =>{
  //   console.log('TEST')
  // }

  return (

    
    <div className={s.wrapper}>
 <h3>Count = {count}</h3>
          <button onClick={() => setCount(count + 1)}>
            Увеличить
          </button>

      {/* <button onClick={handlerSubmit}/> */}
      {/* <input type="button" value="send" onClick={() => setFirstName("Pasha")} /> */}
      {/* <input type="button" value="sdfsdfs" onClick={test} />

        <div className={s.form}>

            <form className="name" onSubmit={test}>

                <label className='item' htmlFor='firstName'>

                    name:<input type="text" name='firstName value' value={firstName} onChange={(event) => setFirstName(event.target.value)} />
                    </label>
               <div>

                   <input className={s.btn} type="submit" value="Send" />

                </div>

                   </form>

         </div> */}
    </div>
  );
};
