import React, { useState } from 'react';
import axi from './services/api.jsx';
import { Articles } from './Articles.jsx';

const myKey = 'df3b0e4161374d6d9c5de1b83b9d7838';

export const Dashboard = () => {

  const [searchVal, setSerchVal] = useState('');
  const [artcls, setArtcls] = useState([]);
  const [sortBy, setSortBy] = useState('relevancy');
  const [page, setPage] = useState(1);

  const sendReq = async (e) => {
    e.preventDefault();
    const res = await axi.get(`v2/everything?q=${searchVal}&apiKey=${myKey}&sortBy=${sortBy}&pageSize=5&page=${page}`);
    setArtcls(res.data.articles);
  }

  return (
    <div style={{ marginTop: '40px' }}>

      <form action="" onSubmit={(e) => { sendReq(e) }}>
        <div style={{ marginBottom: '10px', marginLeft: '10%' }}>
          <input style={{ height: '50px' }} type="search" value={searchVal} autoComplete="off" placeholder="Search here..." name="search" onChange={(e) => setSerchVal(e.target.value)} />
          <button style={{ height: '50px', width: '60px', paddingBottom: '1px' }} type="submit">Search</button>

          <label htmlFor='sorting'>
            <select name="sorting" /* id="sorting" */ value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option>relevancy</option>
              <option>popularity</option>
              <option>publishedAt</option>
            </select>
          </label>
        </div>
      </form>
      <div >
        <Articles articles={artcls} page={page} onChangePage={(pageFromInput) => setPage(pageFromInput)} />
      </div>

    </div>
  )
}


