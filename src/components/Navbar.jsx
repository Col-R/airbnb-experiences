import './Navbar.css'

// images
import logo from '../img/logo.png'

import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src = {logo} alt ="logo"/>
    </nav>
  )
}

export default Navbar


