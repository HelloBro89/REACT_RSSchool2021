import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDataNews } from './redux/actions/actionArticles.jsx';
import './styles/styles.css';

const myKey = 'd4f82bedc4e94e218817ff78386406bc';

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
            <div>
              {' '}
              <span>Author:</span> {item.author}
            </div>
            <div>
              {' '}
              <span>Tittle:</span> {item.title}
            </div>
            <div>
              {' '}
              <span>Description:</span> {item.description}
            </div>
            <div>
              {' '}
              <span>Published At:</span> {item.publishedAt}
            </div>
            <div>
              {' '}
              <span>Content:</span> {item.content}
            </div>
            <div>
              {' '}
              <span>Image:</span>{' '}
              <img src={item.urlToImage} width={200} alt={item.title} />
            </div>
          </div>
        ))}
    </div>
  );
};
