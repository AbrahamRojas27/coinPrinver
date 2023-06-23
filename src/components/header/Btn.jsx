import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setOpenModal } from '../../redux/uiSlice';

function Btn() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  const toLogin = () =>{
    navigate('/login')
    dispatch(setOpenModal(false))
  }

  return (
    <button className='header-button-login' onClick={toLogin}>
      Registrarme
    </button>
  );
}

export { Btn }