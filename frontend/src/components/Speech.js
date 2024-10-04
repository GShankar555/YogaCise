import React, { useEffect, useState } from "react";

const TextToSpeech = ({ text }) => {
  const [synth] = useState(window.speechSynthesis);

  useEffect(() => {
    if (text) {
      const utterance = new SpeechSynthesisUtterance(text);
      synth.cancel();
      synth.speak(utterance);
    }

    return () => {
      synth.cancel();
    };
  }, [text, synth]);

  return null;
};

export default TextToSpeech;
