import React from 'react'
import { Navbar } from '../components/header/Navbar'
import { Logo } from '../components/Logo'

function Footer(){
    return(
        <footer className='footer'>
            <Logo />
            <Navbar/>
        </footer>
    )
}

export default Footer 