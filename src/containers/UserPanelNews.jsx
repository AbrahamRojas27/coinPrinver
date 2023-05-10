import React, { useState } from 'react';
import SearchIcon from '../components/SearchIcon';

function UserPanelNews(props){

    const handleInputChange = (e) =>{
        props.setSearch(e.target.value)
    }

    const searchNews = (e) =>{
        e.preventDefault;
        const searchedNews = props.news.filter(news => news.nne_titulo.toLowerCase().split(" ").includes(props.search))
        props.setNews(searchedNews)
    }

    return(
        <aside className='user-panel'>
           <figure className='user-panel-figure'>
                <img className='user-panel-img' src='https://www.coinpinver.com/Subastaexchange/public/uploads/news/img/coin.png' alt='coinPinver'/>
           </figure>
           <div>
                <p className='user-panel-username'>CoinPinver</p>
           </div>

           <div className='search-news'>
            <input className='input-news' type="text" onChange={handleInputChange}/>
            <button className='button-search-news' onClick={searchNews}>
                <SearchIcon/>
            </button>
           </div>
        </aside>
    )
}

export { UserPanelNews }