// src/LandingPage.js
import React, { useState } from 'react'
import '../css/homepage.css'
import SpeechRecognition from '../components/SpeechRecognition';
import middlePicture from '../images/page1photo.jpg';

const Homepage = () => {

  const [setTranscript] = useState('')

  const startRecognition = () => {
    const recognition = new window.SpeechRecognition()
    recognition.onresult = event => {
      setTranscript(event.results[0][0].transcript)
    }
    recognition.start()
  }

  return (
    <body >
<div class="container">
  <div class="text-container">
    <p>AiNGEL: Your Voice First</p>
    <p>Virtual Companion </p>
    <p>for a Healthier Life </p>
  </div>
  <div class="image-container">
    <img src={middlePicture} alt="Your Image"/>
  </div>
  <SpeechRecognition />
  </div>
</body>
  );
}

export default Homepage;
