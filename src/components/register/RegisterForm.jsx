import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { setError } from '../../actions'

function RegisterForm(){
    const navigate = useNavigate();
    const error = useSelector(state => state.error)
    const dispatch = useDispatch()

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    const handelInputName = (e) =>{
        setName(e.target.value)
    }

    const handelInputLastName = (e) =>{
        setLastName(e.target.value)
    }

    const handelInputUsername = (e) =>{
        setUsername(e.target.value)
    }

    const handelInputEmail = (e) =>{
        setEmail(e.target.value)
    }

    const handelInputPassword = (e) =>{
        setPassword(e.target.value)
    }

    const handelInputPasswordConfim = (e) =>{
        setPasswordConfirm(e.target.value)
    }

    const handelInputPhoneNumber = (e) =>{
        setPhoneNumber(e.target.value)
    }

    const submit = (e) =>{
        e.preventDefault()
        if(password === passwordConfirm){
            axios.post('https://www.coinpinver.com/coinpinverapi/api/usuarios', {
                'username': username,
                'f_name': name,
                'l_name': lastName,
                'email': email,
                'password': password,
                'phone': phoneNumber,
                'password': password,
              })
              .then(function () {
                navigate('/')
              })
              .catch(function (error) {
                dispatch(setError(true))
              });
        } else{
            dispatch(setError(true))
        }
    }

    const errorText = error ? 'error-text' : 'hidden'

    return(
        <>
            <form className='register-form'>
                <p className={errorText}>Comprueba los datos</p>
                <div className='input-container'>
                <div>
                        <label className='input-label'>Nombre</label>
                        <input type='text' onChange={handelInputName} className='input'/>
                </div>

                    <div>
                        <label className='input-label'>Apellido</label>
                        <input type='text' onChange={handelInputLastName} className='input'/>
                    </div>
                </div>

                <div className='input-container'>
                    <div>
                        <label className='input-label'>Nombre de usuario</label>
                        <input onChange={handelInputUsername} type='text' className='input'/>
                    </div>

                    <div>
                        <label className='input-label'>Correo</label>
                        <input onChange={handelInputEmail} type='text' className='input'/>
                    </div>
                </div>

                <div className='input-container'>
                    <div>
                        <label className='input-label'>Numero de telefono <span className='text-white opacity-70'>sin espacios</span></label>
                        <input onChange={handelInputPhoneNumber} type='tel' className='input'/>
                    </div>

                    <div>
                        <label className='input-label'>Contraseña</label>
                        <input onChange={handelInputPassword} type='Password' className='input'/>
                    </div>
                </div>

                <div className='input-container'>
                    <div>
                        <label className='input-label'>Confirme la contraseña</label>
                        <input onChange={handelInputPasswordConfim} type='password' className='input'/>
                    </div>
                    <button className='button-register' onClick={submit}>Registrarme</button>
                </div>

            </form>
        </>
    )
}

export { RegisterForm }