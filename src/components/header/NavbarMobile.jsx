import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { setOpenModal } from '../../redux/uiSlice';

const routes = [
    {
      to: '/',
      text: 'Inicio'
    },
    {
      to: '/news',
      text: 'Noticias'
    },
    {
      to: '/team',
      text: 'Equipo'
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
            <li>
              <a href="https://coinpinver.com/Subastaexchange/noticias" className="nav-item">Señales</a>
            </li>
            <li>
              <a href="https://tokencpge.coinpinver.com/" className="token-button">Compra nuestro CPGE</a>
            </li>
        </ul>
       </nav>
    )
}

export { NavbarMobile }