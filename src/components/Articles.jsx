import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './styles/styles.css';

export const Articles = () => {
  const response = useSelector((state) => state.articles.data);

  return (
    <div>
      {response.length ? (
        <div>
          <div className="column">
            <div className="title" style={{ width: '10%' }}>
              Author
            </div>
            <div className="title">Tittle</div>
            <div className="title" style={{ width: '25%' }}>
              Description
            </div>
            <div className="title" style={{ width: '15%' }}>
              Published At
            </div>
            <div className="title" style={{ width: '25%' }}>
              Content
            </div>
            <div className="title" style={{ width: '25%' }}>
              Image
            </div>
          </div>

          {response.map((item, ind) => (
            <div key={ind}>
              <nav>
                <NavLink
                  style={{ textDecoration: 'none', color: 'black' }}
                  activeStyle={{ textDecoration: 'none' }}
                  to={`details/${item.title}`}
                >
                  <div className="column" id={ind}>
                    <div className="string" style={{ width: '10%' }}>
                      {item.author}
                    </div>
                    <div className="string">{item.title}</div>
                    <div className="string" style={{ width: '25%' }}>
                      {item.description}
                    </div>
                    <div className="string" style={{ width: '15%' }}>
                      {item.publishedAt}
                    </div>
                    <div className="string" style={{ width: '25%' }}>
                      {item.content}
                    </div>
                    <div className="string" style={{ width: '25%' }}>
                      <img
                        src={item.urlToImage}
                        style={{ width: '100%', height: '100%' }}
                        alt={item.title}
                      />
                    </div>
                  </div>
                </NavLink>
              </nav>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};
