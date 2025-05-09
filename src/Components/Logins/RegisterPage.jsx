import React from 'react'
import { useNavigate } from 'react-router-dom'
import LoginPage from './LoginPage'

const RegisterPage = () => {
    const navigate = useNavigate()
  return (
    <div className='overlay'>
        <div className='login-modal'>
            <button className='close-button' onClick={() => navigate('/')}>
                ✖
            </button>
            <h1 className='LoginLogo'>Register</h1>
            <div className='mb-4'>
                <input type="text" placeholder='Your Name' className='input-field'/>
                <input type='email' placeholder='Email' className='input-field' />
                <input type='password' placeholder='Password' className='input-field' />
                <input type='password' placeholder='Repeat Password' className='input-field' />
            </div>
            <button className='login-button'>Register</button>
            <div className='mb-4'>
                Have an account?{' '}
                <span className='register-link' onClick={() => navigate('/login')}>
                    Sign In
                </span>
            </div>
        </div>
    </div>
  )
}

export default RegisterPage
