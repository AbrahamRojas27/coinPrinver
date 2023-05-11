import React, { useEffect, useState } from 'react';
import { MoonIcon } from '../components/header/MoonIcon';
import { SunIcon } from '../components/header/SunIcon';
import { Logo } from '../components/Logo';
import { Navbar } from '../components/header/Navbar';
import { Btn } from '../components/header/Btn';
import { MenuIcon } from '../components/header/MenuIcon';
import { useDispatch, useSelector } from 'react-redux'
import { setOpenModal } from '../actions';
import UserModal from '../components/header/UserModal';
import PerfilIcon from '../components/header/PerfilIcon';


function Header(){
   const [active, setActive] = useState(false)
   const [userModal, setUserModal] = useState(false)
   
   const openModal = () => dispatch(setOpenModal(true))
   const dispatch = useDispatch()
   const user = useSelector(state => state.user)

    useEffect(() =>{
        window.addEventListener('scroll', () =>{
           window.scrollY > 0 ? setActive(true) : setActive(false)
        })
    }, [])

    const header = active ? 'header--active' : 'header'

    const closeUserModal = () => setUserModal(!userModal)

    return(
         <header className={header}>
            <Logo />
            <Navbar/>
         <div className='header-buttons-container'>

            <button className='hidden'>
               <SunIcon/>
            </button>

            <div>
               {
                  ((localStorage.getItem('user') !== null && localStorage.getItem('user')) || user) 
                     ? <button className='perfil-button' onClick={closeUserModal}>
                           <PerfilIcon/>
                        </button>
                     : <Btn/>
               }
            </div>

            <button onClick={openModal} className='header-mobile-menu-button'>
               <MenuIcon/>
            </button>

            <UserModal 
               setUserModal = {setUserModal}
               userModal = {userModal}
               dispatch = {dispatch}
            />
         </div>
      </header>
    )
}

export default Header 