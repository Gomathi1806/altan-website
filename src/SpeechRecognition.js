import React , { useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import MicrophoneIcon from './images/microphone.jpg'; // Import microphone icon
import VideoIcon from './images/camera.jpg'; // Import video icon

const SpeechRecognitionComponent = () => {
  const { transcript, resetTranscript } = useSpeechRecognition();
  const [listening, setListening] = useState(false);

  const handleStartListening = () => {
    resetTranscript();
    setListening(true);
    SpeechRecognition.startListening({ continuous: true });
  };

  const handleStopListening = () => {
    setListening(false);
    SpeechRecognition.stopListening();
  };

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return <div>Sorry, speech recognition is not supported by your browser.</div>;
  }

  return (
    <div>
      <section className="section3">
      <input type="text" placeholder="Write or Speak To Me..." className='textbox-section' value={transcript} readOnly/>
      <img src={MicrophoneIcon} alt="Microphone" className="icon" onClick={handleStartListening} />
      <img src={VideoIcon} alt="videoIcon" className="videoicon" onClick={handleStartListening} />
      </section>
    </div>
  );
};

export default SpeechRecognitionComponent;
