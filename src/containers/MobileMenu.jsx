import React, { useState } from 'react'
import { MoonIcon } from '../components/header/MoonIcon'
import { SunIcon } from '../components/header/SunIcon'
import CloseModalBtn  from '../components/header/CloseModalBtn'
import { NavbarMobile } from '../components/header/NavbarMobile'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setOpenModal } from '../redux/uiSlice'

function MobileMenu(){
  let user = useSelector(state => state.user.user)

  const openModal = useSelector(state => state.ui.openModal)
  const navigate = useNavigate()
  const toRegister = () => {
    navigate('/login')
    dispatch(setOpenModal(false))
  }
  const dispatch = useDispatch()
  const closeModal = () => dispatch(setOpenModal(false))
  const modal = openModal ? 'mobile-menu' : 'hidden'

  const logout = () => {
      localStorage.removeItem('user')
      setUser(null)
  }

  const userClass = user ? ' ' : 'hidden' 

  return(
    <section className={modal}>
        <div className='close-button-container'>
          <button className='close-button' onClick={closeModal}>
            <CloseModalBtn/>
          </button>
        </div>

        <div className={userClass}>
            <figure className="user-modal-img">
                <img src={user?.imagen} alt="user image" />
            </figure>
            <p className="user-modal-username">{user?.nombre}</p>
        </div>
        
        <NavbarMobile/>

        
        <div className='mobile-buttons-container'>
            <button className='hidden'>
                <SunIcon />
                <MoonIcon/>
            </button>
            {
              user 
                ? <button className="logout-button" onClick={logout}>Cerrar session</button>
                : <button className='button-register-mobile' onClick={toRegister}>Registrame</button>
            }
        </div>
    </section>
    )
}

export default MobileMenu