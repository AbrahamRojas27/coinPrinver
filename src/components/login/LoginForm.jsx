import React, { useEffect } from 'react';
import { useState } from 'react';
import { LoginFormImg } from './LoginFormImg';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import fetchApi from '../../api';
import { setError, setUser } from '../../actions';
import axios from 'axios';


function LoginForm(){
    const USER_API = 'https://www.coinpinver.com/coinpinverapi/api/login'

    const user = useSelector(state => state.user)
    const error = useSelector(state => state.error)
    const dispatch = useDispatch()

    const navigate = useNavigate()

    const [userEmail, setUserEmail] = useState(null)
    const [userPassword, setUserPassword] = useState(null)

    const handleInputChangeEmail = (e) =>{
        setUserEmail(e.target.value)
    }

    const handleInputChangePassword = (e) =>{
        setUserPassword(e.target.value)
    }

    const handleInputSubmit = async (e) =>{
        e.preventDefault();
        await axios.post(USER_API, {
            userEmail,
            userPassword
        })
        .then((res) => console.log(res))
        .catch((err) => dispatch(setError(true)))

        
    }

    useEffect(() =>{
            if(user){
                navigate('/')
            }
    }, [user])

    return(
       <section className='login-form-container' >
                <LoginFormImg />

            {
                error
                    ?   <article className='form-error-text-container'>
                            <p className='error-text'>Usuario o contraseña invalidos.</p>
                        </article>
                        
                    : <div className='hidden'></div>
            }

            <form onSubmit={handleInputSubmit} className='login-form'>
                <div className='login-input-container'>
                    <label className='input-label' >Email</label>
                    <input onChange={handleInputChangeEmail} placeholder='Email' className='input'/>
                </div>

                <div className='login-input-container'>
                    <label className='input-label'>Contraseña</label>
                    <input placeholder='Contraseña' type='password' onChange={handleInputChangePassword} className='input'/>
                </div>

                <button className='login-button' onClick={handleInputSubmit}>Entrar</button>
            </form>

            
            <button onClick={() => navigate('/register')} className='login-button-register'>Crear cuenta</button>

       </section>

    )
}

           
// <a href='/register' className='login-button-register'>Crear cuenta</a>

export { LoginForm }