import React from 'react';

function LoadingSkeleton(){
    return(
        <section className='loadin-skeleton'>
            <div className='loading-card'></div>
            <div className='loading-card'></div>
            <div className='loading-card'></div>
            <div className='loading-card'></div>
            <div className='loading-card'></div>
            <div className='loading-card'></div>
        </section>
    )
}

export { LoadingSkeleton }