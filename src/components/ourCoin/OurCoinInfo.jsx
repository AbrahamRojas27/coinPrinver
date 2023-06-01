import React from 'react';
import CoinVideo from './CoinVideo';

function OurCoinInfo(){
    return(
        <article className='our-coin-text-container'>
            <h2 className='our-coin-title'>NUESTRO TOKEN CPGE</h2>
            <p className='our-coin-text'>¡Compra nuestro Token y obtén beneficios exclusivos! Descuentos en membresías y servicios dentro de nuestra plataforma, un staking del 5% al poseer nuestro token, y participación gratuita en eventos y servicios. ¡Más información en nuestro whitepaper! ¡Únete a nosotros ahora!</p>
            <CoinVideo/>
            <div className='coin-button-container'>
                <a href='https://coinpinver.com/Subastaexchange/public/uploads/whitepaper/whitepaperen.pdf' className='our-coin-button'>
                    Whitepaper CPGE
                </a>
                <a href='https://tokencpge.coinpinver.com/' className='our-coin-button'>
                    Compra nuestro CPGE
                </a>
            </div>
        </article>
    )
}

export { OurCoinInfo }