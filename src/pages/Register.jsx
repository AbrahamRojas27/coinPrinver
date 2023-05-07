import React from 'react';
import { RegisterForm } from '../components/register/RegisterForm';
import { RegisterImg } from '../components/register/RegisterImg';

function Register(){
    return(
        <section className='register'>
            <RegisterImg />
            <RegisterForm />
        </section>
    )
}

export default Register 