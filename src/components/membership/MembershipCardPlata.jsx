import React from 'react';
import { MemberPlataImg } from './MemberPlataImg';
import { useNavigate } from 'react-router-dom';


function MembershipPlata(props){
    const navigate = useNavigate();
    return(
        <div className='membership plata'>
            <MemberPlataImg />
            <h3 className='membership-title'>MEMBRESIA PLATA</h3>
            
            <ul className='membership-list'>
                <li className='membership-list-item'>
                    <p className='membership-text'>{'Ánalisis técnico corto/mediano/largo plazo.'}</p>
                </li>
                <li className='membership-list-item'>
                    <p className='membership-text'>{'Ánalisis informativo (noticias último momento).'}</p>
                </li>
                <li className='membership-list-item'>
                    <p className='membership-text'>{'Explicacion práctica y teorica de inversión de criptomoneda.'}</p>
                </li>
                <li className='membership-list-item'>
                    <p className='membership-text'>{'Redaccion informática de ultimo momento.'}</p>
                </li>
                <li className='membership-list-item'>
                    <p className='membership-text'>{'Señal práctico de inversión de 10 criptomonedas por mes.'}</p>
                </li>
                <li className='membership-list-item'>
                    <p className='membership-text'>{'Invitación a proyectos estables y solidos defi, airdrops, tokens, icos, metaverso, blockchain.(se compartiran solo proyectos sólidos y reales de investigación profunda para poder compartir buenas oportunidades).'}</p>
                </li>
            </ul>

            <a href='https://coinpinver.com/Subastaexchange/scsecurity'  className='button'>Adquiere esta membresía</a>
        </div>
    )
}

export { MembershipPlata }