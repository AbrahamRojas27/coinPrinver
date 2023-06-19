import React, { useRef } from 'react';
import { MemberOroImg } from './MemberOroImg';
import { useLazyLoad } from '../../hooks/useLazy';


function MembershipOro({info}){
    const element = useRef()
    const isIntersecting = useLazyLoad(element)

    return(
        <div ref={element}>
            {isIntersecting && (
                <div className='membership-oro'>
                    <MemberOroImg />
                    <h3 className='membership-title'>MEMBRESIA ORO</h3>
                    
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
                        <a href='https://checkout.stripe.com/c/pay/cs_live_a1bPvrhhL60vtJrwzX72JKnh7vzlO91OATgcVVc2uOTVvk97yqW4Lh67TW#fidkdWxOYHwnPyd1blppbHNgWjA0SVFwQH9Cc2J1TVBcTF1HYXRoY1dSSzFQbUQ3V1N2R0tPZ3BPZmdGTHRqZl9KQzJDMldmQmdfZHdvNHB8f0xfZERWb39JaTJWXFZdYHc3NVRXXWZgXWBNNTVJdjFPT0lRSCcpJ3VpbGtuQH11anZgYUxhJz8nNz1qPXxfMnc0NVBTNjBONz1jJyknd2BjYHd3YHdKd2xibGsnPydtcXF1dj8qKmZtYGZuanBxK3Zxd2x1YCtmamgqJ3gl'  className='button'>Adquiere esta membresía 32.22/US$</a>
                    </div>
                </div>
            )}
        </div>
    )
}

export { MembershipOro }