import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import axi from './services/api.jsx';
import './styles/styles.css'

const myKey = 'df3b0e4161374d6d9c5de1b83b9d7838';

export const Details = ({ dataEl }) => {
    const [dataTitle, setDataTitle] = useState([]);

    const { id } = useParams();
    useEffect(() => {
        if (!dataEl.length) {
            (async () => {
                const res = await axi.get(`v2/everything?qInTitle=${id}&apiKey=${myKey}`);
                console.log("REFRESH");
                if (res.data.articles.length > 1) {
                    const newRes = res.data.articles.slice(0, 1);
                    setDataTitle(newRes);
                } else {
                    setDataTitle(res.data.articles);
                }
            })()
        } else {
            console.log(" NOT REFRESH");
            setDataTitle(dataEl)
        }
    }, []);


    return (<div>
        {
            dataTitle.filter(elem => elem.title === id).map((item, ind) => (
                <div key={ind} style={{ fontSize: "20px" }}>
                    <div> <span>Author:</span>  {item.author}</div>
                    <div> <span>Tittle:</span>  {item.title}</div>
                    <div> <span>Description:</span>  {item.description}</div>
                    <div> <span>Published At:</span>  {item.publishedAt}</div>
                    <div> <span>Content:</span>  {item.content}</div>
                    <div> <span>Image:</span>  <img src={item.urlToImage} width={200} alt={item.title} /></div>
                </div>)
            )
        }
    </div>
    )
}