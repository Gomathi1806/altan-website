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
    </header>
  )
}

export default Header
