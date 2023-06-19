import React from 'react';
import { LoginForm } from '../components/login/LoginForm';
import MobileMenu from '../containers/MobileMenu';

function Login(){
    return(
        <section className='login' >
            <MobileMenu />
            <LoginForm/>
        </section>
    )
}

export default Login