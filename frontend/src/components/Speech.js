import React, { useEffect, useState } from "react";

const TextToSpeech = ({ text, onComplete }) => {
  const [synth] = useState(window.speechSynthesis);

  useEffect(() => {
    if (text) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.onend = () => {
        if (onComplete) {
          onComplete();
        }
      };
      synth.cancel();
      synth.speak(utterance);
    }

    return () => {
      synth.cancel();
    };
  }, [text, synth, onComplete]);

  return null;
};

export default TextToSpeech;
