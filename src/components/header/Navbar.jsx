import React from "react";
import { NavLink } from 'react-router-dom'

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



function Navbar(props){
    return(
       <nav>
            <ul className='header-navbar'>
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

export { Navbar }