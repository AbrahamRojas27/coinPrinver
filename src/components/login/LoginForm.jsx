import React from 'react';
import { useState } from 'react';
import { LoginFormImg } from './LoginFormImg';
import {  useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setError } from '../../redux/uiSlice';
import axios from 'axios';
import { userData } from '../../redux/userSlice';


function LoginForm(){
    const USER_API = 'https://www.coinpinver.com/coinpinverapi/api/login'

    const error = useSelector(state => state.ui.error)
    const dispatch = useDispatch()

    const [whatch, setWhatch] = useState(false)

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
            username: userEmail,
            password: userPassword
        })
        .then((res) => {
            if(res.data.message === 'Correcto'){
                localStorage.setItem('user', res.data.data.jwt)
                navigate('/')
                dispatch(setError(false))
            }else{
                dispatch(setError(true))
            }
            
        })
        .catch((err) => console.log(err))

        
    }

    const whatchClass = whatch ? 'whatch--active' : 'whatch'

    const onClickPassword = (setChange) =>{
        if(setChange === setWhatch){
            setWhatch(!whatch)
        } else{
            setWhatchConfirm(!whatchConfirm)
        }
            
    }
    const passwordType = whatch ? 'text' : 'password'


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
                    <div>
                        <input placeholder='Contraseña' type={passwordType} onChange={handleInputChangePassword} className='input'/>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                            fill="currentColor"
                            className={`bi bi-eye-fill ${whatchClass}`}
                            onClick={() => onClickPassword(setWhatch)}
                        >
                            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                            <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                        </svg>
                    </div>
            </div>

                <button className='login-button' onClick={handleInputSubmit}>Entrar</button>
            </form>

            
            <button onClick={() => navigate('/register')} className='login-button-register'>Crear cuenta</button>

       </section>

    )
}

export { LoginForm }