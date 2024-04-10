// src/Footer.js
import React from 'react'
import './Footer.css' // You'll create this CSS file

const Footer = () => {
  return (
    <footer className='footer'>
      <div>
        <a href='#about'>About Us</a>
        <a href='#contact'>Contact Us</a>
        <input type='checkbox' id='joinWaitlist' name='joinWaitlist' />
        <label htmlFor='joinWaitlist'>Join Waitlist</label>
        <button>Join</button>
      </div>
      <p>&copy; 2024 My Website. All rights reserved.</p>
    </footer>
  )
  // Add this inside the Footer component, before the closing </footer> tag
}

export default Footer
