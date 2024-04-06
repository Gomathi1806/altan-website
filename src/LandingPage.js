// src/LandingPage.js
import React, { useState } from 'react'
import './LandingPage.css' // You'll create this CSS file

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
      <div className='landing-content'>
        <h1>Welcome to Our Website</h1>
        <p>{transcript}</p>
      </div>
      <button onClick={startRecognition}>Start Speech Recognition</button>
    </div>
  )
}

export default LandingPage
