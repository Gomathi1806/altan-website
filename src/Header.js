// src/Header.js
import React from 'react'
import './Header.css' // You'll create this CSS file
import SigninSignupButtons from './SigninSignupButtons'
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
            <a href='#Knowledge'>Knowledge</a>
          </li>
          <li>
            <a href='#Research'>Research</a>
          </li>
        </ul>
      </nav>
      <SigninSignupButtons />
    </header>
  )
}

export default Header
