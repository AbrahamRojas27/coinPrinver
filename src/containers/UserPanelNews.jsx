import React from 'react';

function UserPanelNews(){
    return(
        <aside className='user-panel'>
           <figure className='user-panel-figure'>
                <img className='user-panel-img' src='https://www.coinpinver.com/Subastaexchange/public/uploads/news/img/coin.png' alt='coinPinver'/>
           </figure>
           <div>
                <p className='user-panel-username'>CoinPinver</p>
           </div>
        </aside>
    )
}

export { UserPanelNews }