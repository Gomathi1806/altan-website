// src/Header.js
import React from 'react'
import './Header.css' // You'll create this CSS file

const Header = () => {
  return (
    <header className='header'>
      <nav>
        <ul>
          <li>
            <a href='#home'>Home</a>
          </li>
          <li>
            <a href='#about'>About Us</a>
          </li>
          <li>
            <a href='#contact'>Contact Us</a>
          </li>
          <li>
            <a href='#signin'>Sign In</a>
          </li>
          <li>
            <a href='#signup'>Sign Up</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
