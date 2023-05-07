import React from 'react'
import { useNavigate } from 'react-router-dom';

function Btn() {
  const navigate = useNavigate()
  
  const toLogin = () =>{
    navigate('/login')
  }

  return (
    <button className='header-button-login' onClick={toLogin}>
      Registrarme
    </button>
  );
}

export { Btn }