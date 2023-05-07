import React from 'react'

function ProfileImg(){
    const info = useInfo()
    return(
        <figure className='perfil-img-figure'>
                <img className='perfil-img'/>
        </figure>
    )
}

export { ProfileImg }