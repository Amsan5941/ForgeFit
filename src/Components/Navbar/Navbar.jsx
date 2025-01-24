import React from 'react'
import Hamburger from './Hamburger'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
      <div className="navigation">
        <ul>
          <li>Home</li>
          <li>Tracker</li>
          <li>Gym Bot</li>
          <li>About</li>
          <li>Contact Us</li>
        </ul>
          <div className='hamburger'>
            <Hamburger />
          </div>


      </div>
    </div>
  )
}

export default Navbar
