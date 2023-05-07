import React from 'react';
import AboutUsInfo from '../components/about/AboutUsInfo';
import AboutVideo  from '../components/about/AboutVideo';

function AboutUs(){
    return(
                <section className='about-container'>
                    <AboutUsInfo/>
                    <AboutVideo />
                </section>
            )

}

export default AboutUs