import React from 'react';
import { OurCoinInfo } from '../components/ourCoin/OurCoinInfo';
import { CoinBanner } from '../components/ourCoin/CoinBanner';

function OurCoin(){
    return(
        <section className='our-coin'>
                <OurCoinInfo />
                <CoinBanner />
        </section>
    )
}

export { OurCoin }