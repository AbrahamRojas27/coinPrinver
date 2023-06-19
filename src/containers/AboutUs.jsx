import React, { useRef } from 'react';
import AboutUsInfo from '../components/about/AboutUsInfo';
import AboutVideo  from '../components/about/AboutVideo';
import { useLazyLoad } from '../hooks/useLazy';

function AboutUs(){
    const element = useRef()
    const isIntersecting = useLazyLoad(element)
    return(
        <section ref={element} className='about-container'>
            {isIntersecting && (
                <>
                    <AboutUsInfo/>
                    <AboutVideo />
                </>
            )}
        </section>
    )

}

export default AboutUs