import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Articles } from './Articles.jsx';
import { getDataNews, addSearchValue, changeSorting, setPage, noChange } from './redux/actions/actions.jsx';
import axi from './services/api.jsx';

const myKey = 'df3b0e4161374d6d9c5de1b83b9d7838';

export const Dashboard = ({ dataElem }) => {
  // const [sortBy, setSortBy] = useState('relevancy');
  // const [searchVal, setSerchVal] = useState('');
  const [artcls, setArtcls] = useState([]);
  // const [page, setPage] = useState(1);

  const searchFilters = useSelector((state) => state.main);
  const dispatch = useDispatch();

  const sendReq = async (e) => {
    e.preventDefault();
    const res = await axi.get(`v2/everything?q=${searchFilters.value}&apiKey=${myKey}&sortBy=${searchFilters.sorting}&pageSize=5&page=${searchFilters.page}`);
    setArtcls(res.data.articles);
    dataElem(res.data.articles);
  }


  const handleChangePage = (e) => {
    e.preventDefault();
    const { value } = e.target;
    // console.log(typeof value)
    const regexp = /\d+/;
    const matchedValue = value.match(regexp);
    // console.log(matchedValue)
    if (matchedValue) {
      const newValue = +matchedValue[0];
      // console.log(newValue)
      dispatch(setPage(newValue));
    } else {
      dispatch(noChange(""));
      // console.log("not num");
    }
  };

  // const changeValue = (e) => {
  //   e.preventDefault();
  //   const val = e.target.state;
  // }

  const change = () => {
    dispatch(getDataNews());
  }

  const funTest = () => {
    console.log(searchFilters.response)
  }

  return (

    <div style={{ marginTop: '40px' }}>
      <form action="" onSubmit={(e) => { sendReq(e) }}>
        <div style={{ marginBottom: '10px', marginLeft: '10%' }}>
          <input style={{ height: '50px' }} type="search" value={searchFilters.value} autoComplete="off" placeholder="Search here..." name="search" onChange={(e) => dispatch(addSearchValue(e.target.value))} /* onChange={(e) => setSerchVal(e.target.value)} */ />
          <button style={{ height: '50px', width: '60px', paddingBottom: '1px' }} type="submit">Search</button>

          <label htmlFor='sorting'>
            <select name="sorting" value={searchFilters.sorting} onChange={(e) => dispatch(changeSorting(e.target.value))} /* onChange={(e) => setSortBy(e.target.value)} */>
              <option>relevancy</option>
              <option>popularity</option>
              <option>publishedAt</option>
            </select>
          </label>
        </div>
      </form>

      {/* for test */}
      <div>{searchFilters.value}</div>

      <div>
        <button onClick={change}>SEN REQ</button>
      </div>

      <div>
        <button onClick={funTest}>CONSOLE RES</button>
      </div>

      {/* for test */}

      <div >
        <Articles articles={artcls}/*  page={page} */ /* onChangePage={(pageFromInput) => setPage(pageFromInput)} */ />
      </div>

      <div style={{ margin: '50px 0px 0px 80px' }}>
        <label htmlFor="getPage">
          <input style={{ width: '50px', borderColor: 'red' }} name='getPage' type='text' value={searchFilters.page} onChange={e => handleChangePage(e)} />
        </label>
      </div>

    </div>
  )
}


