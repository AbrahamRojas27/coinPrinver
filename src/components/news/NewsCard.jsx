import React from 'react'
import { Link } from 'react-router-dom'

function NewsCard(props){
    const description = props.description ? 'new-card-description' : 'hidden'
    return(
       <Link className='new-card-container' to={props.slug}>
            <div className='new-card'>
                <figure className='new-card-img-figure'>
                    <img src={props.img} alt={props.title} className='new-card-img'/>
                </figure>
                <article className='new-card-text-container'>
                    <p className='new-card-title'>{props.title}</p>
                    <p className={description}>{props.description}</p>
                    <p className='new-card-date'>{props.date}</p>
                    <div className='new-card-author-container'>
                        <figure>
                            <img src='https://www.coinpinver.com/Subastaexchange/public/uploads/news/img/coin2.png'/>
                        </figure>
                        <p>{props.author}</p>
                    </div>
                </article>
            </div>
       </Link>
    )
}

export { NewsCard }