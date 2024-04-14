// src/Footer.js
import React from 'react'
import './Footer.css' // You'll create this CSS file

const Footer = () => {
  return (
    <footer className='footer'>
      <nav>
        <ul>
          <li>
            <a href='#termsAndConditions'>Terms and Conditions</a>
          </li>
          <li>
            <a href='#becomeAGameChanger'>Become a Game Changers</a>
          </li>
          <li>
            <a href='#privacyPolicy'>Privacy Policy</a>
          </li>
        </ul>
      </nav>
    </footer>
  )
}

export default Footer

