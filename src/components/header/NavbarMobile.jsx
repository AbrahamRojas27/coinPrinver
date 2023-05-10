import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { setOpenModal } from '../../actions';

const routes = [
    {
      to: '/',
      text: 'Home'
    },
    {
      to: '/news',
      text: 'News'
    }
  ]
 
function NavbarMobile(){
  const dispatch = useDispatch()
  const closeModal = () => dispatch(setOpenModal(false))
    return(
       <nav className='navbar-mobile-container'>
        <ul className='navbar-mobile'>
            {
                routes.map(route =>(
                    <li key={route.text}>
                        <NavLink
                        onClick={closeModal}
                        className={({isActive}) => isActive ? 'nav-item--active' : 'nav-item' }
                        to={route.to}
                        >{route.text}
                        </NavLink>
                    </li>
                    ))
            }
        </ul>
       </nav>
    )
}

export { NavbarMobile }