import React from 'react';
import { useParams } from "react-router-dom";
import './styles/styles.css'

export const Details = ({ dataEl }) => {

    const { id } = useParams();

    return (<div>
        {/* {console.log(dataEl[0].source.id)} */}
        {

            dataEl.filter(elem => elem.source.id === id).map((item, ind) => (
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