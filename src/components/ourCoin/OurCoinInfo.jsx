import React from 'react';

function OurCoinInfo(){
    return(
        <article className='our-coin-text-container'>
            <h2 className='our-coin-title'>NUESTRO TOKEN CPRP</h2>
            <p className='our-coin-text'>{'Invierte en nuestro token y obtén beneficios en nuestros proyectos de alta rentabilidad.'}</p>
            <a href='https://coinpinver.com/ico.coinpinver/' className='our-coin-button'>
                Compra nuestro CPRP
            </a>
        </article>
    )
}

export { OurCoinInfo }