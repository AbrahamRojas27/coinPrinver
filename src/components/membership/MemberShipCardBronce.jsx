import React, { useRef } from 'react';
import { MemberBronceImg } from './MemberBronceImg';
import { useLazyLoad } from '../../hooks/useLazy';


function MembershipBronce({info}){
    const element = useRef()
    const isIntersecting = useLazyLoad(element)


    return(
        <div ref={element}>
            {isIntersecting && (
                <div className='membership bronce'>
                <MemberBronceImg />
                <h3 className='membership-title'>MEMBRESIA BRONCE</h3>
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
                        <a href='https://buy.stripe.com/4gw6qRaDdbzz35K8wI'  className='button'>Adquiere esta membresía 6/US$</a>
                    </div>
                </div>
            )}
        </div>
    )
}

export { MembershipBronce }