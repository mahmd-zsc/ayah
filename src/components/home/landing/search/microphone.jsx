import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import microphone from "../../../../images/home/microphone.png";
import { changeMicrophoneMode } from "../../../../redux/settings/settingsActions";
import {
  changeSearchMenuOpen,
  setTextOfSearch,
} from "./../../../../redux/surahSearch/suraSearchAction";

function Microphone({ setText }) {
  const microphoneState = useSelector((state) => state);
  const dispatch = useDispatch();

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  const handleMicrophoneToggle = () => {
    dispatch(changeMicrophoneMode(true));
    dispatch(changeSearchMenuOpen(true));
    SpeechRecognition.startListening();
  };

  const handleMicrophoneOff = () => {
    dispatch(changeMicrophoneMode(false));
    SpeechRecognition.stopListening();
    // resetTranscript();
  };
  useEffect(() => {
    dispatch(setTextOfSearch(transcript));
    setText(transcript);
  }, [transcript]);
  return (
    <div>
      {!listening ? (
        <img
          className="w-6 absolute z-10 right-6 top-1/2 -translate-y-1/2 cursor-pointer"
          src={microphone}
          onClick={handleMicrophoneToggle}
          alt=""
        />
      ) : null}
      {listening ? (
        <div
          onClick={handleMicrophoneOff}
          className="absolute z-10 right-5 top-1/2 -translate-y-1/2 flex items-center gap-1 h-4 duration-200 cursor-pointer"
        >
          <div className="one h-full w-[2px] bg-white"></div>
          <div className="two h-1/2 w-[2px] bg-white"></div>
          <div className="three h-1/3 w-[2px] bg-white"></div>
          <div className="two h-1/2 w-[2px] bg-white"></div>
          <div className="one h-full w-[2px] bg-white"></div>
          <div className="three h-1/3 w-[2px] bg-white"></div>
        </div>
      ) : null}
    </div>
  );
}

export default Microphone;
