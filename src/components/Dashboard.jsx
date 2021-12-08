import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Articles } from './Articles.jsx';
import {
  addSearchValue,
  changeSorting,
  setPage,
  noChange,
} from './redux/actions/actionsDashboard.jsx';
import { getDataNews } from './redux/actions/actionArticles.jsx';
import './styles/styles.css';

const myKey = 'd4f82bedc4e94e218817ff78386406bc';
// const myKey = 'df3b0e4161374d6d9c5de1b83b9d7838';

export const Dashboard = () => {
  const searchFilters = useSelector((state) => state.dashboard);
  const dispatch = useDispatch();

  const sendReq = async (e) => {
    e.preventDefault();
    const URL = `v2/everything?q=${searchFilters.value}&apiKey=${myKey}&sortBy=${searchFilters.sorting}&pageSize=5&page=${searchFilters.page}`;
    dispatch(getDataNews(URL));
  };

  const handleChangePage = (e) => {
    e.preventDefault();
    const { value } = e.target;
    const regexp = /\d+/;
    const matchedValue = value.match(regexp);
    if (matchedValue) {
      const newValue = +matchedValue[0];
      dispatch(setPage(newValue));
    } else {
      dispatch(noChange(''));
    }
  };

  return (
    <div style={{ marginTop: '40px', height: 'auto', textAlign: 'center' }}>
      <form
        action=""
        onSubmit={(e) => {
          sendReq(e);
        }}
      >
        <div style={{ marginBottom: '10px', marginLeft: '10%' }}>
          <input
            style={{
              height: '70px',
              width: '35%',
              border: '3px solid rgb(37, 171, 212)',
              borderRadius: '10px',
            }}
            type="search"
            value={searchFilters.value}
            autoComplete="off"
            placeholder="Enter keyword..."
            name="search"
            onChange={(e) => dispatch(addSearchValue(e.target.value))}
          />
          <button
            className="sub"
            style={{
              paddingBottom: '2px',
              marginLeft: '3px',
              width: '80px',
              height: '70px',
              border: '3px solid rgb(37, 171, 212)',
              borderRadius: '10px',
            }}
            type="submit"
          ></button>

          <label htmlFor="sorting">
            <select
              style={{
                marginLeft: '3px',
                border: '2px solid rgb(37, 171, 212)',
                borderRadius: '5px',
                height: '40px',
              }}
              name="sorting"
              value={searchFilters.sorting}
              onChange={(e) => dispatch(changeSorting(e.target.value))}
            >
              <option>relevancy</option>
              <option>popularity</option>
              <option>publishedAt</option>
            </select>
          </label>
        </div>
      </form>

      <div>
        <Articles />
      </div>

      <div
        style={{
          marginTop: '50px',
          /*  marginBottom: '20px', */ textAlign: 'center',
          position: 'relative',
          fontSize: '15px',
        }}
      >
        <label htmlFor="getPage">
          Page:{' '}
          <input
            name="getPage"
            style={{
              width: '30px',
              height: '30px',
              borderColor: 'rgb(37, 171, 212)',
              borderRadius: '5px',
              marginBottom: '20px',
            }}
            type="text"
            value={searchFilters.page}
            onChange={(e) => handleChangePage(e)}
          />
        </label>
      </div>
    </div>
  );
};
