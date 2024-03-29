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
                        <a href='https://buy.stripe.com/fZeaH726H1YZ6hW9AI'  className='button'>Adquiere esta membresía 26.85/US$</a>
                    </div>

                </div>
            )}
            </div>
    )
}

export { MembershipPlata }