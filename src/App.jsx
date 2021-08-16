import React, { useState } from 'react';
import axi from './components/services/api.jsx';


export const App =  () => {

  const [searchVal, setSerchVal] = useState('');

const  sendReq = async (e) => {
 e.preventDefault();
 const test = await axi.get(`v2/everything?q=${searchVal}&apiKey=df3b0e4161374d6d9c5de1b83b9d7838`);
  console.log(test);
}

  return(
    <div>
<div style={{marginBottom: '10px', marginLeft: '10%'}}>
        <input style={{height: '50px'}} type="search" value={searchVal} placeholder="Search here..." name="search" onChange={(e) => setSerchVal(e.target.value)} />
        <button style={{height: '50px',width: '60px' , paddingBottom: '1px'}}  type="submit" onClick={(e) => {sendReq(e)}}>Search</button>
    </div>
</div>
  )
}

  
 