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

const myKey = 'd4f82bedc4e94e218817ff78386406bc';

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
    <div style={{ marginTop: '40px' }}>
      <form
        action=""
        onSubmit={(e) => {
          sendReq(e);
        }}
      >
        <div style={{ marginBottom: '10px', marginLeft: '10%' }}>
          <input
            style={{ height: '50px' }}
            type="search"
            value={searchFilters.value}
            autoComplete="off"
            placeholder="Search here..."
            name="search"
            onChange={(e) =>
              dispatch(addSearchValue(e.target.value))
            } /* onChange={(e) => setSerchVal(e.target.value)} */
          />
          <button
            style={{ height: '50px', width: '60px', paddingBottom: '1px' }}
            type="submit"
          >
            Search
          </button>

          <label htmlFor="sorting">
            <select
              name="sorting"
              value={searchFilters.sorting}
              onChange={(e) =>
                dispatch(changeSorting(e.target.value))
              } /* onChange={(e) => setSortBy(e.target.value)} */
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

      <div style={{ margin: '50px 0px 0px 80px' }}>
        <label htmlFor="getPage">
          <input
            style={{ width: '50px', borderColor: 'red' }}
            name="getPage"
            type="text"
            value={searchFilters.page}
            onChange={(e) => handleChangePage(e)}
          />
        </label>
      </div>
    </div>
  );
};
