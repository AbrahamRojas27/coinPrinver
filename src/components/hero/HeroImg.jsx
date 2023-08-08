import React from 'react';

function HeroImg(){
  return (
    <div>
      <figure className='hero-img-figure'>
        <img className='hero-img' lazy='true' alt='CoinPinver' src='https://www.coinpinver.com/Subastaexchange/public/uploads/news/img/Component%201.png' ></img>
      </figure>
    </div>
  )
}

export { HeroImg }