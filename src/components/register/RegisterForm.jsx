import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { setError } from '../../redux/uiSlice';

function RegisterForm(){
    const navigate = useNavigate();
    const error = useSelector(state => state.error)
    const dispatch = useDispatch()

    const login = async () =>{
        await axios.post(USER_API, {
            username: email,
            password: password
        })
        .then((res) => {
            if(res.data.message === 'Correcto'){
                localStorage.setItem('user', res.data.data.jwt)
                //navigate('/')
                dispatch(setError(false))
            } else{
                dispatch(setError(true))
                console.log(res.data)
            }

        })
        .catch((err) => dispatch(setError(true)))
    }

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [whatch, setWhatch] = useState(false)
    const [whatchConfirm, setWhatchConfirm] = useState(false)

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

     const submit = async (e) =>{
         e.preventDefault()
         if(password === passwordConfirm){
             await axios.post('https://www.coinpinver.com/coinpinverapi/api/usuarios', {
                 'username': username,
                 'f_name': name,
                 'l_name': lastName,
                 'email': email,
                 'password': password,
                 'phone': phoneNumber,
               })
               .then(async (res) => console.log(res))
               .catch((error) => {
                 dispatch(setError(true))
               });
         } else{
             dispatch(setError(true))
         }
     }

    const onClickPassword = (setChange) =>{
        if(setChange === setWhatch){
            setWhatch(!whatch)
        } else{
            setWhatchConfirm(!whatchConfirm)
        }
            
    }

    const errorText = error ? 'error-text' : 'hidden'
    const passwordType = whatch ? 'text' : 'password'
    const confirmType = whatchConfirm ? 'text' : 'password'
    const whatchClass = whatch ? 'whatch--active' : 'whatch'
    const whatchConfirmClass = whatchConfirm ? 'whatch--active' : 'whatch'

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
                        <input onChange={handelInputPassword} type={passwordType} className='input'/>
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

                <div className='input-container'>
                    <div>
                        <label className='input-label'>Confirme la contraseña</label>
                        <input onChange={handelInputPasswordConfim} type={confirmType} className='input'/>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                            fill="currentColor"
                            className={`bi bi-eye-fill ${whatchConfirmClass}`}
                            onClick={() => onClickPassword(setWhatchConfirm)}
                        >
                            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                            <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                        </svg>
                    </div>
                    <button className='button-register' onClick={submit}>Registrarme</button>
                </div>

            </form>
        </>
    )
}

export { RegisterForm }