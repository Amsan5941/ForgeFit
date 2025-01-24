import React from 'react'
import './Login.css'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

const LoginButton = () => {
    const navigate = useNavigate(); // Hook to programmatically navigate
  return (
    <div className="LoginBut">
        <button
            className="LoginButton"
            onClick={() =>navigate('/login')}
        >
            Login
        </button>
    </div>
  )
}

export default LoginButton
