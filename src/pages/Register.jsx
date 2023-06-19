import React from 'react';
import MobileMenu from '../containers/MobileMenu';
import { RegisterForm } from '../components/register/RegisterForm';
import { RegisterImg } from '../components/register/RegisterImg';

function Register(){
    return(
        <section className='register'>
            <MobileMenu/>
            <RegisterImg />
            <RegisterForm />
        </section>
    )
}

export default Register 