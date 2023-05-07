import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ProfileImg } from '../components/profile/ProfileImg'
import { ProfileInfo } from '../components/profile/ProfileInfo'


function Profile(){
    const navigate = useNavigate()

    const salir = () =>{
        localStorage.removeItem('username')
        localStorage.removeItem('userKey')
        localStorage.removeItem('userMembership')
        localStorage.removeItem('userImagen')
        navigate('/')
    }

    return(
        <section className='profile'>
            <div className='profile-user-container'>
                <ProfileImg/>
                <ProfileInfo/>
            </div>

            <button onClick={salir} className='logout-button'> Cerrar sesion </button>
        </section>
    )
}

export default Profile 