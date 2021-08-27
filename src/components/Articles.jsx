import React, { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import './styles/styles.css';

export const Articles = ({ articles, page, onChangePage }) => {

    const [aPage, setAPage] = useState('');

    useEffect(() => {
        setAPage(page);
    }, [page]);


    const handleChange = (e) => {
        e.preventDefault();
        const { value } = e.target;
        const regexp = /\d+/;
        const matchedValue = value.match(regexp);
        if (matchedValue) {
            const newValue = +matchedValue[0];
            onChangePage(newValue);
            setAPage(newValue);
        } else {
            setAPage('');
        }
    };

    return (
        <div>
            {articles.length ? <div>

                <div className='column'>
                    <div className='string'>Author</div>
                    <div className='string'>Tittle</div>
                    <div className='string'>Description</div>
                    <div className='string'>Published At</div>
                    <div className='string'>Content</div>
                    <div className='string'>Image</div>
                </div>

                {
                    articles.map((item, ind) =>
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
            <div style={{ margin: '50px 0px 0px 80px' }}>
                <label htmlFor="getPage">
                    <input style={{ width: '50px', borderColor: 'red' }} name='getPage' type='text' value={aPage} onChange={e => { handleChange(e) }} />
                </label>
            </div>
        </div >
    )
}
