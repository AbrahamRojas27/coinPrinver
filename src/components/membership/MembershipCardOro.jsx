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
                        <a href='https://buy.stripe.com/28o8yZ7r10UV35K28f'  className='button'>Adquiere esta membresía 32.22/US$</a>
                    </div>
                </div>
            )}
        </div>
    )
}

export { MembershipOro }