import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const SpeechRecognitionComponent = () => {
  const { transcript, resetTranscript } = useSpeechRecognition();

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return <div>Sorry, speech recognition is not supported by your browser.</div>;
  }

  return (
    <div>
      <p>{transcript}</p>
      <button onClick={SpeechRecognition.startListening}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
    </div>
  );
};

export default SpeechRecognitionComponent;
