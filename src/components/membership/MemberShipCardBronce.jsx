import React from 'react';
import { MemberBronceImg } from './MemberBronceImg';


function MembershipBronce({info}){

    return(
        <div className='membership bronce'>
            <MemberBronceImg />
            <h3 className='membership-title'>MEMBRESIA BRONCE</h3>
            <ul className='membership-list'>
            {
                info.map(info =>(
                    <li className='membership-list-item'>
                        <p className='membership-text'>{info.beneficio}</p>
                    </li>
                ))
            }
            </ul>
                <div>
                    <a href='https://checkout.stripe.com/c/pay/cs_live_a1MMdivlToddQkXGEszWNanPbFLJYsKbFVu5c0yN7AUQ10Muzqe5mvg5Rf#fidkdWxOYHwnPyd1blppbHNgWjA0SVFwQH9Cc2J1TVBcTF1HYXRoY1dSSzFQbUQ3V1N2R0tPZ3BPZmdGTHRqZl9KQzJDMldmQmdfZHdvNHB8f0xfZERWb39JaTJWXFZdYHc3NVRXXWZgXWBNNTVJdjFPT0lRSCcpJ3VpbGtuQH11anZgYUxhJz8nZEBQM3RXMGxRPHd3MTxKMG50Jyknd2BjYHd3YHdKd2xibGsnPydtcXF1dj8qKmZtYGZuanBxK3Zxd2x1YCtmamgqJ3gl'  className='button'>Adquiere esta membresía</a>
                </div>
        </div>
    )
}

export { MembershipBronce }