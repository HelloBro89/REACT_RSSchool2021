import React, { useEffect, useState } from 'react';
import s from './styles/styles.css';

export const Articles = ({ articles, page, onChangePage }) => {

    const [aPage, setAPage] = useState('');

    useEffect(() => {
        setAPage(page);
    }, [page]);


    const handleChange = (e) => {
        const { value } = e.target;
        const regexp = /\d+/;
        const matchedValue = value.match(regexp);
        if (matchedValue) {
            const newValue = +matchedValue[0];
            onChangePage(newValue);
            //   setAPage(newValue);
        } else {
            setAPage('');
        }
    };

    return (
        <div>
            {articles.length ? <table className={s.table} >
                <tbody>
                    <tr className={s.headerOfTable}>
                        <td >Author</td>
                        <td>Tittle</td>
                        <td>Description</td>
                        <td>Published At</td>
                        <td>Content</td>
                        <td>Image</td>
                    </tr>


                    {
                        articles.map((item, ind) => (
                            <tr key={ind}>
                                <td className={s.firstTD}>{item.author}</td>
                                <td>{item.title}</td>
                                <td>{item.description}</td>
                                <td>{item.publishedAt}</td>
                                <td>{item.content}</td>
                                <td>
                                    <img src={item.urlToImage} width={200} alt={item.title} />
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table> : null}
            <div style={{ margin: '50px 0px 0px 80px' }}>
                <label htmlFor="getPage">
                    <input style={{ width: '50px', borderColor: 'red' }} name='getPage' type='text' value={aPage} onChange={e => { handleChange(e) }} />
                </label>
            </div>
        </div>
    )
}
