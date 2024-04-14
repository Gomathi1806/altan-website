// src/LandingPage.js
import React, { useState } from 'react'
import './LandingPage.css' // You'll create this CSS file
import Header from './Header'
import Footer from './Footer'
import SpeechRecognition from './SpeechRecognition';
import TextToSpeech from './TextToSpeech';

const LandingPage = () => {
  const [transcript, setTranscript] = useState('')

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
      <div className='top-left-image'></div>
      <div className='landing-content'>
        <p>AiNGEL: Your Voice First</p>
        <p>Virtual Companion for a</p>
        <p>Healthier Life</p>
        <div className='middle-right-image'></div>
        <h1>Speech Recognition</h1>
      <SpeechRecognition />

      <h1>Text to Speech</h1>
      <TextToSpeech text="what is the time now" />
      </div>
      <Footer />
    </div>
  )
}

export default LandingPage
