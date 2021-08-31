import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from "react-router-dom";
import './styles/styles.css';

export const Articles = () => {

    const response = useSelector((state) => state.articles.data);

    return (
        <div>
            {response.length ? <div>

                <div className='column'>
                    <div className='string'>Author</div>
                    <div className='string'>Tittle</div>
                    <div className='string'>Description</div>
                    <div className='string'>Published At</div>
                    <div className='string'>Content</div>
                    <div className='string'>Image</div>
                </div>

                {
                    response.map((item, ind) =>
                        <div key={ind}>
                            <nav >
                                <NavLink style={{ textDecoration: 'none', color: 'black' }} activeStyle={{ textDecoration: 'none' }} to={`details/${item.title}`}>
                                    <div className='column' id={ind} >
                                        <div className='string'>{item.author}</div>
                                        <div className='string'>{item.title}</div>
                                        <div className='string'>{item.description}</div>
                                        <div className='string'>{item.publishedAt}</div>
                                        <div className='string'>{item.content}</div>
                                        <div className='string'>
                                            <img src={item.urlToImage} width={200} alt={item.title} />
                                        </div>
                                    </div>
                                </NavLink>
                            </nav>
                        </div>
                    )
                }
            </div> : null
            }
        </div >
    )
}
