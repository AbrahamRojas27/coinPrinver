import React from 'react';
import { useRouteError } from 'react-router-dom';

function NotFound(){
    const error = useRouteError()
    return(
        <div className='error'>
            <figure className='error-img'>
                <img src='https://www.coinpinver.com/Subastaexchange/public/uploads/news/img/error.png' alt='error'/>
            </figure>
            <p className='error-title'>Lo sentimos ha ocurrido un error</p>
            <p className='error-text'>{error.statusText || error.message}</p>
        </div>
    )
}

export default NotFound 