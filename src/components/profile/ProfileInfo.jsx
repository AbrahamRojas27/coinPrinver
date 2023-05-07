import React from 'react';

function ProfileInfo(){
    const info = useInfo()
    return(
        <article>
            <h3 className='profile-username'>nonbre</h3>
            <p className='profile-membership'>membresia</p>
         </article>
    )
}

export { ProfileInfo }