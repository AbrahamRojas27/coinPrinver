import React from 'react'
import { MoonIcon } from '../components/header/MoonIcon'
import { SunIcon } from '../components/header/SunIcon'
import CloseModalBtn  from '../components/header/CloseModalBtn'
import { NavbarMobile } from '../components/header/NavbarMobile'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setOpenModal } from '../actions'
import { setUser } from '../actions'


function MobileMenu(){

  const openModal = useSelector(state => state.modal)
  const navigate = useNavigate()
  const toRegister = () => {
    navigate('/login')
    dispatch(setOpenModal(false))
  }
  const dispatch = useDispatch()
  const closeModal = () => dispatch(setOpenModal(false))
  const modal = openModal ? 'mobile-menu' : 'hidden'
  const user = JSON.parse(localStorage.getItem('user'))

  const logout = () => {
      localStorage.removeItem('user')
      props.dispatch(setUser(null))
      props.setUserModal(false)
  }

  const image = user ? user.imagen : ''
  const name = user ? user.nombre : ''
  const userImg = user ? '' : 'hidden'

  return(
    <section className={modal}>
        <div className='close-button-container'>
          <button className='close-button' onClick={closeModal}>
            <CloseModalBtn/>
          </button>
        </div>

        <div className={userImg}>
            <figure className="user-modal-img">
                <img src={image} alt="user image" />
            </figure>
            <p className="user-modal-username">{name}</p>
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

export {MobileMenu}