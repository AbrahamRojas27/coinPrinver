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

export { Navbar }