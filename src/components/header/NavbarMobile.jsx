import React from 'react';
import { NavLink } from 'react-router-dom';

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
    return(
       <nav className='navbar-mobile-container'>
        <ul className='navbar-mobile'>
            {
                routes.map(route =>(
                    <li key={route.text}>
                        <NavLink
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