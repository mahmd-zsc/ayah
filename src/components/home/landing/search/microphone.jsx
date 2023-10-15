import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeMicrophoneMode } from "../../../redux/settings/settingsActions";
import microphone from "../../../images/home/microphone.png";

import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { changeSearchMenuOpen } from "../../../redux/surahSearch/suraSearchAction";

function Microphone() {
  const microphoneState = useSelector((state) => state.settings.microphone);

  const dispatch = useDispatch();
  let handleMicrophoneOf = () => {
    dispatch(changeMicrophoneMode(false));
  };
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();
  let handleMicrophoneToggle = () => {
    dispatch(changeMicrophoneMode(true));
    dispatch(changeSearchMenuOpen(true));
  };
  return (
    <>
      {!microphoneState ? (
        <img
          className="w-6 absolute z-10 right-6 top-1/2 -translate-y-1/2 cursor-pointer"
          src={microphone}
          onClick={(handleMicrophoneToggle, SpeechRecognition.startListening)}
          alt=""
        />
      ) : null}
      {microphoneState ? (
        <div
          onClick={handleMicrophoneOf}
          className=" absolute z-10 right-5 top-1/2 -translate-y-1/2 flex items-center gap-1 h-4 duration-200 cursor-pointer  "
        >
          <div className=" one h-full w-[2px] bg-white"></div>
          <div className=" two h-1/2 w-[2px] bg-white"></div>
          <div className=" three h-1/3 w-[2px] bg-white"></div>

          <div className=" two h-1/2 w-[2px] bg-white"></div>
          <div className=" one h-full w-[2px] bg-white"></div>
          <div className=" three h-1/3 w-[2px] bg-white"></div>
        </div>
      ) : null}
    </>
  );
}

export default Microphone;
