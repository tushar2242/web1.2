import { useState, useEffect } from "react";
import { useSpeechSynthesis } from "react-speech-kit";

function useSpeech(text) {
  const [speechText, setSpeechText] = useState("");
  const [speechRate, setSpeechRate] = useState(0.6);
  const { speak, cancel } = useSpeechSynthesis();
  const [voices, setVoices] = useState([]);

  useEffect(() => {
    const availableVoices = window.speechSynthesis.getVoices();
    // console.log(availableVoices)
    setVoices(availableVoices);
  }, []);

  const setSpeech = (text) => {
    const cleaned = text.replace(/[^a-zA-Z0-9\s]/g, "");
    setSpeechText(cleaned);
  };

  const speakText = (voiceIndex) => {
    if (speechText) {
      const utterance = new SpeechSynthesisUtterance(speechText);
      console.log(voices[voiceIndex])
      if (voices.length > 0 && voices[voiceIndex]) {
        utterance.voice = voices[voiceIndex];
        utterance.rate = speechRate;
        speak(utterance);
      }
    }
    else{
        console.log('fired')
    }
  };

  const stopSpeech = () => {
    cancel();
  };

  return { setSpeech, speakText, stopSpeech };
}

export default useSpeech;
