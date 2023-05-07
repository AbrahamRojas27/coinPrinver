import React from 'react';
import { MemberBronceImg } from './MemberBronceImg';
import { useNavigate } from 'react-router-dom';


function MembershipBronce(){
    const navigate = useNavigate()

    return(
        <div className='membership'>
            <MemberBronceImg />
            <h3 className='membership-title'>MEMBRESIA BRONCE</h3>
            <ul className='membership-list'>
                <li className='membership-list-item'>
                    <p className='membership-text'>{'Ánalisis técnico corto/mediano plazo.'}</p>
                </li>
                <li className='membership-list-item'>
                    <p className='membership-text'>{'Ánalisis informativo (noticias último momento).'}</p>
                </li>
                <li className='membership-list-item'>
                    <p className='membership-text'>{'Explicacion práctica y teorica de investigacion de criptomoneda.'}</p>
                </li>
                <li className='membership-list-item'>
                    <p className='membership-text'>{'Redaccion informática de ultimo momento.'}</p>
                </li>
                <li className='membership-list-item'>
                    <p className='membership-text'>{'Señal práctico de inversión de 5 criptomonedas por mes.'}</p>
                </li>
                <li className='membership-list-item'>
                    <p className='membership-text'>{'Invitación a proyectos estables y solidos defi, airdrops, tokens, icos, metaverso, blockchain.(se compartiran solo proyectos sólidos y reales de investigación profunda para poder compartir buenas oportunidades).'}</p>
                </li>
            </ul>
                <button onClick={() => navigate('/login')}  className='button'>Adquiere esta membresía</button>
        </div>
    )
}

export { MembershipBronce }