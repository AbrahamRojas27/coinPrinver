import React from 'react';
import { LoginForm } from '../components/login/LoginForm';
import { LoginBanner  } from '../components/login/LoginBanner';
import { MobileMenu } from '../containers/MobileMenu';

function Login(){
    return(
        <section className='login' >
            <MobileMenu />
            <LoginForm/>
            <LoginBanner/>
        </section>
    )
}

export default Login