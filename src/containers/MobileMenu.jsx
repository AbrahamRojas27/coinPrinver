import React from 'react'
import { MoonIcon } from '../components/header/MoonIcon'
import { SunIcon } from '../components/header/SunIcon'
import CloseModalBtn  from '../components/header/CloseModalBtn'
import { NavbarMobile } from '../components/header/NavbarMobile'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setOpenModal } from '../actions'


function MobileMenu(){

  const openModal = useSelector(state => state.modal)
  const navigate = useNavigate()
  const toRegister = () => navigate('/login')
  const dispatch = useDispatch()
  const closeModal = () => dispatch(setOpenModal(false))
  const modal = openModal ? 'mobile-menu' : 'hidden'
  return(
    <section className={modal}>
        <div className='close-button-container'>
          <button className='close-button' onClick={closeModal}>
            <CloseModalBtn/>
          </button>
        </div>
        
        <NavbarMobile/>

        <div className='mobile-buttons-container'>
            <button className='hidden'>
                <SunIcon />
                <MoonIcon/>
            </button>
            <button className='button-register-mobile' onClick={toRegister}>Registrame</button>
        </div>
    </section>
    )
}

export {MobileMenu}