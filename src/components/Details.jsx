import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDataNews } from './redux/actions/actionArticles.jsx';
import './styles/styles.css';

const myKey = 'df3b0e4161374d6d9c5de1b83b9d7838';

export const Details = () => {
  const response = useSelector((state) => state.articles.data);
  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    if (!response.length) {
      const URL = `v2/everything?qInTitle=${id}&apiKey=${myKey}`;
      dispatch(getDataNews(URL));
    }
  }, []);

  return (
    <div>
      {response
        .filter((elem) => elem.title === id)
        .slice(0, 1)
        .map((item, ind) => (
          <div key={ind} style={{ fontSize: '20px' }}>
            <div style={{ marginTop: '2%' }}>
              {' '}
              <span>Author:</span> {item.author}
            </div>
            <div style={{ marginTop: '2%' }}>
              {' '}
              <span>Tittle:</span> {item.title}
            </div>
            <div style={{ marginTop: '2%' }}>
              {' '}
              <span>Description:</span> {item.description}
            </div>
            <div style={{ marginTop: '2%' }}>
              {' '}
              <span>Published At:</span> {item.publishedAt}
            </div>
            <div style={{ marginTop: '2%' }}>
              {' '}
              <span>Content:</span> {item.content}
            </div>
            <div
              style={{
                marginTop: '2%',
                fontSize: '25px',
                color: 'rgb(8, 114, 114)',
              }}
            >
              Image:
            </div>
            <div className="image">
              <img
                src={item.urlToImage}
                style={{ width: '30%' }}
                alt={item.title}
              />
            </div>
          </div>
        ))}
    </div>
  );
};
