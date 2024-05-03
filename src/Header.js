// src/Header.js
import React from 'react'
import './Header.css' // You'll create this CSS file
import logo from './images/page1leftlogo.jpg'; // Import the image

const Header = () => {
  return (
    <header className='header'>
      <div class="logo">
            <img src={logo} alt="Logo"/>
        </div>
      <nav>
        <ul>
          <li>
            <a href='#home'>Home</a>
          </li>
          <li>
            <a href='#about'>All About AiNGEL</a>
          </li>
          <li>
            <a href='#contact'>Knowledge</a>
          </li>
          <li>
            <a href='#home'>Research</a>
          </li>
          <li>
            <a href='#about'>Contact</a>
          </li>
        </ul>
      </nav>
      <button class="btn sign-in">SIGN IN</button>
      <button class="btn sign-up">SIGN UP</button>
    </header>
  )
}

export default Header
