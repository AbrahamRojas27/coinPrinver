import React, { useRef } from 'react';
import { MemberPlataImg } from './MemberPlataImg';
import { useLazyLoad } from '../../hooks/useLazy';


function MembershipPlata({info}){
    const element = useRef()
    const isIntersecting = useLazyLoad(element)
    return(
        <div ref={element}>
            {isIntersecting && (
                <div className='membership plata'>
                    <MemberPlataImg />
                    <h3 className='membership-title'>MEMBRESIA PLATA</h3>
                    
                    <ul className='membership-list'>
                        {
                            info.map(info =>(
                                <li className='membership-list-item' key={info.beneficio}>
                                <p className='membership-text'>{info.beneficio}</p>
                                </li>
                            ))
                        }
                    </ul>

                    <div>
                        <a href='https://checkout.stripe.com/c/pay/cs_live_a1zrUDgcTmhoiyLIuOVvUWfVaaYzQrAYpq8NszV73zSCOXl3yNj5yyWO33#fidkdWxOYHwnPyd1blppbHNgWjA0SVFwQH9Cc2J1TVBcTF1HYXRoY1dSSzFQbUQ3V1N2R0tPZ3BPZmdGTHRqZl9KQzJDMldmQmdfZHdvNHB8f0xfZERWb39JaTJWXFZdYHc3NVRXXWZgXWBNNTVJdjFPT0lRSCcpJ3VpbGtuQH11anZgYUxhJz8nY19gZE0yNzNNNFxfM21SPERMJyknd2BjYHd3YHdKd2xibGsnPydtcXF1dj8qKmZtYGZuanBxK3Zxd2x1YCtmamgqJ3gl'  className='button'>Adquiere esta membresía 26.85/US$</a>
                    </div>

                </div>
            )}
            </div>
    )
}

export { MembershipPlata }