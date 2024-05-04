// src/Header.js
import React from 'react'
import '../css/header.css' 
import logo from '../images/aingelLogo.jpg'; 
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className='header'>
      <div class="logo">
            <img src={logo} alt="Logo"/>
        </div>
      <nav>
        <ul>
          <li><NavLink exact to="/" >Home</NavLink></li>
          <li><NavLink to="/aboutAingel">All About AiNGEL</NavLink></li>
          <li><NavLink to="/knowledge">Knowledge</NavLink></li>
          <li><NavLink to="/research">Research</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </nav>
      <button class="btn sign-in">SIGN IN</button>
      <button class="btn sign-up">SIGN UP</button>
    </header>
  )
}

export default Header
