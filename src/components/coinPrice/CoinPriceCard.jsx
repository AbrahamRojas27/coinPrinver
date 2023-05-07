import React from 'react';

function CoinPriceCard(props){
    return(
        <div className='coin-price-card'>
            <h2 className='coin-price-title'><span className='coin-name'>{props.coin}</span>/USD</h2>
            <p className='coin-price-price'>{props.coinPrice}</p>
        </div>
    )
}

export { CoinPriceCard }