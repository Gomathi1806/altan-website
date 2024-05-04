// src/Footer.js
import React from 'react'
import '../css/footer.css' // You'll create this CSS file
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='footer'>
        <nav>
            <ul>
                <li><NavLink to="/termsAndConditions">Terms And Conditions</NavLink></li>
                <li><NavLink to="/becomeAGameChanger">Become A Game Changer</NavLink></li>
                <li><NavLink to="/privacyPolicy">Privacy Policy</NavLink></li>
            </ul>
        </nav>
    </footer>

  )
}

export default Footer