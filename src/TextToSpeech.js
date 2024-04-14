import React from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';

const TextToSpeech = ({ text }) => {
  const { speak } = useSpeechSynthesis();

  return (
    <div>
      <button onClick={() => speak({ text })}>Speak</button>
    </div>
  );
};

export default TextToSpeech;
