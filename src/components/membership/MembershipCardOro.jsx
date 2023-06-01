import React from 'react';
import { MemberOroImg } from './MemberOroImg';
import { useNavigate } from 'react-router-dom';


function MembershipOro(props){
    const navigate = useNavigate()
    const user = JSON.parse(localStorage.getItem('user'));
    const membershipLink = user ? user.membresia ? 'hidden' : 'button' : 'hidden'
    const membershipButton = user ? 'hidden' : 'button' 

    const toLogin = () =>{
        navigate('/login')
    }

    return(
        <div className='membership-oro'>
            <MemberOroImg />
            <h3 className='membership-title'>MEMBRESIA ORO</h3>
            
            <ul className='membership-list'>
                <li className='membership-list-item'>
                    <p className='membership-text'>{'Ánalisis técnico corto/mediano/largo plazo.'}</p>
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
                    <p className='membership-text'>{'Señal práctico de inversión de todas criptomonedas por mes.'}</p>
                </li>
                <li className='membership-list-item'>
                    <p className='membership-text'>{'Un live personal al mes y asesoría personal.'}</p>
                </li>
                <li className='membership-list-item'>
                    <p className='membership-text'>{'Invitación a proyectos estables y solidos defi, airdrops, tokens, icos, metaverso, blockchain.(se compartiran solo proyectos sólidos y reales de investigación profunda para poder compartir buenas oportunidades).'}</p>
                </li>
            </ul>

            <div>
                <a href='https://coinpinver.com/Subastaexchange/scsecurity'  className={membershipLink}>Adquiere esta membresía</a>
                <button className={membershipButton} onClick={toLogin}>Adquiere esta membresia</button>
            </div>
        </div>
    )
}

export { MembershipOro }