import React from 'react';
import SearchIcon from '../components/SearchIcon';
import { useSelector } from 'react-redux';

function UserPanelNews(props){  
    let user = useSelector(state => state.user.user)

    const stockClass = props.stock ? 'filter-button--active' : 'filter-button'
    const criptoClass = props.cripto ? 'filter-button--active' : 'filter-button'

    const handleInputChange = () =>{
        props.setSearch(props.searchNews.current.value)
    }

    return(
        <aside className='user-panel'>
           <figure className='user-panel-figure'>
                <img className='user-panel-img' src={user ? user?.imagen : 'https://www.coinpinver.com/Subastaexchange/public/uploads/news/img/coin.png'} alt='coinPinver'/>
           </figure>
           <div>
                <p className='user-panel-username'>{user?.nombre}</p>
           </div>

           <div className='search-news'>
                <input className='input-news' type="text" ref={props.searchNews} onChange={handleInputChange} value={props.search}/>
            <div className='button-search-news'>
                <SearchIcon/>
            </div>
           </div>
           <div className='filter-container'>
                <button className={criptoClass} onClick={props.handleCripto}>Criptomonedas</button>
                <button className={stockClass} onClick={props.handleStock}>Acciones</button>
           </div>
        </aside>
    )
}

export { UserPanelNews }