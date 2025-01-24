import React from 'react'

const LoginPage = () => {
  return (
    <div className="LoginPage">
        <h1 className="LoginLogo">Login Page</h1>
        <div className="mb-4">
            <input
                type='email'
                placeholder='Email'
                className='border rounded-lg p-2 mb-4 w-80'
            />
            <input
                type='password'
                placeholder='Password'
                className='border rounded-lg p-2 mb-4 w-80'
            />
        </div>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            Login
        </button>
    </div>
  )
}

export default LoginPage
