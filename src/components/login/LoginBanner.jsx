import React from 'react';

function LoginBanner(){
    return(
        <section className='login-banner'>
            <div className='login-banner-text-container'>
                <h3 className='login-banner-title'>BIENVENIDO AL EXITO</h3>
                <p className='login-banner-text'>Sigue disfrutando de la mejor informacion en Criptomonedas</p>
            </div>
            <figure className='login-banner-img'>
                <img alt='coinPinver' src='https://www.coinpinver.com/Subastaexchange/public/uploads/news/img/Component%201.png'/>
            </figure>
        </section>
    )
}

export { LoginBanner }