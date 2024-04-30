// src/LandingPage.js
import React, { useState } from 'react'
import './LandingPage.css' // You'll create this CSS file
import Header from './Header'
import Footer from './Footer'
import SpeechRecognition from './SpeechRecognition';
import middlePicture from './images/page1photo.jpg'; // Import the image


const LandingPage = () => {
  const [setTranscript] = useState('')

  const startRecognition = () => {
    const recognition = new window.SpeechRecognition()
    recognition.onresult = event => {
      setTranscript(event.results[0][0].transcript)
    }
    recognition.start()
  }

  return (
    <div className='landing-page'>
      <Header />
      <main className="main">
        <section className="section1">
          <h3>AiNGEL: Your Voice First</h3>
          <h3>Virtual Companion for a </h3>
          <h3>Healthier Life</h3>
        </section>
        <section className="section2">
        <img src={middlePicture} alt='logo' />
        </section>
        </main>
        <main className='main'>
      <SpeechRecognition />
      </main>
      <Footer />
    </div>
  )
}

export default LandingPage
