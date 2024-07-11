import { Box, Modal } from '@mui/material'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { style } from '../cart/Cart';
import { RegisterForm } from './RegisterForm';
import { LoginForm } from './LoginForm';

export const Auth = () => {
    //need to find the location using useLocation
    const location=useLocation();
    const navigate=useNavigate();

    const handleOnClose=()=>{
        navigate("/")
    }
  return (
    <>
    <Modal onClose={handleOnClose} open={
        // in the both condition modal will be open
        location.pathname==="/account/register"
        || location.pathname==="/account/login"
    
    }>
        {/* This style const comes from cart */}
        <Box sx={style}>
            {/* if path name is "/account/register/" */}
            { location.pathname==="/account/register"? <RegisterForm/>:<LoginForm/>}
        </Box>
    </Modal>
    </>
  )
}
