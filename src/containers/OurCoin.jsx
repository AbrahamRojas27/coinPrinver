import React, { useRef } from 'react';
import { OurCoinInfo } from '../components/ourCoin/OurCoinInfo';
import CoinVideo from '../components/ourCoin/CoinVideo';
import { useLazyLoad } from '../hooks/useLazy';

function OurCoin(){
    const element = useRef()
    const isIntersecting = useLazyLoad(element)
    return(
        <section ref={element} className='our-coin'>
                {isIntersecting && (
                    <>
                        <OurCoinInfo />
                        <CoinVideo />
                    </>
                )}
        </section>
    )
}

export default OurCoin 