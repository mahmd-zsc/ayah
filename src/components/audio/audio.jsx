import React, { useState, useRef, useEffect } from "react";
import "./audio.css";
import {
  faBackward,
  faForward,
  faPause,
  faPlay,
  faVolumeOff,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import pattern from "../../images/Pattern 186-PhotoRoom.png-PhotoRoom.png";
import { useDispatch, useSelector } from "react-redux";
import { deleteData, fetchAudio } from "../../redux/audio/audioAction";
function Audio() {
  let ReciterId = useSelector((state) => state.audio.ReciterId);
  let dispatch = useDispatch();
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [volumeOpen, setVolumeOpen] = useState(false);
  let [next, setNext] = useState(true);
  let [previous, setPrevious] = useState(true);
  const [surahId, setsurahId] = useState();
  let audio = useSelector((state) => state.audio);
  // console.log(audio)

  useEffect(() => {
    const updateCurrentTime = () => {
      if (audioRef.current) {
        setCurrentTime(audioRef.current.currentTime);
      }
    };

    const updateDuration = () => {
      if (audioRef.current) {
        setDuration(audioRef.current.duration);
      }
    };

    const handleAudioEnd = () => {
      setIsPlaying(false);
      // You may want to perform additional actions when the audio ends
      // For example, moving to the next track.
    };

    // Add null checks before adding event listeners
    if (audioRef.current) {
      audioRef.current.addEventListener("timeupdate", updateCurrentTime);
      audioRef.current.addEventListener("loadedmetadata", updateDuration);
      audioRef.current.addEventListener("ended", handleAudioEnd);
    }

    return () => {
      // Add null checks before removing event listeners
      if (audioRef.current) {
        audioRef.current.removeEventListener("timeupdate", updateCurrentTime);
        audioRef.current.removeEventListener("loadedmetadata", updateDuration);
        audioRef.current.removeEventListener("ended", handleAudioEnd);
      }
    };
  }, [audio]);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = Math.floor(timeInSeconds % 60);

    const displayHours = hours > 0 ? `${hours}:` : "";
    const displayMinutes = `${minutes < 10 ? "0" : ""}${minutes}`;
    const displaySeconds = `${seconds < 10 ? "0" : ""}${seconds}`;

    return `${displayHours}${displayMinutes}:${displaySeconds}`;
  };

  const handleSeek = (event) => {
    const { value } = event.target;
    audioRef.current.currentTime = value;
    setCurrentTime(value);
  };

  const handleVolumeChange = (event) => {
    const { value } = event.target;
    audioRef.current.volume = value;
    setVolume(value);
  };
  let handleDeltedAudio = () => {
    dispatch(deleteData());
  };
  let handleSurahPrevious = () => {
    if (surahId > 1) {
      dispatch(fetchAudio(ReciterId, surahId - 1));
      setIsPlaying(true);
    }
  };
  let handleSurahNext = () => {
    if (surahId < 114) {
      dispatch(fetchAudio(ReciterId, surahId + 1));
      setIsPlaying(true);
    }
  };
  useEffect(() => {
    if (audio.data.length > 0) {
      setsurahId(+audio.data[0].audio_file.chapter_id);
    }
  }, [audio.data]);
  useEffect(() => {
    setIsPlaying(true);
    setNext(surahId < 114);
    setPrevious(surahId > 1);
  }, [audio.data]);
  return (
    audio.data.length > 0 &&
    !audio.loading && (
      <div className="relative   z-30">
        <div className="fixed  left-0 bottom-0 h-12 w-full    bg-darkBlue shadow-lg shadow-black animate__animated animate__fadeInUp">
          <audio
            autoPlay
            ref={audioRef}
            src={audio.data[0].audio_file.audio_url}
          ></audio>
          <div className="flex justify-between items-center w-full px-4 h-full relative z-50">
            <p className=" w-16 text-xs sm:text-md ">
              {formatTime(currentTime)}
            </p>

            <div className=" flex items-center gap-4 z-40">
              <div className=" relative   ">
                <input
                  className={`${
                    volumeOpen ? "block" : "hidden"
                  } h-px w-20 absolute top-1/2 right-4 `}
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={volume}
                  onChange={handleVolumeChange}
                />
                <FontAwesomeIcon
                  onClick={() => setVolumeOpen(!volumeOpen)}
                  rotation={180}
                  className=" cursor-pointer"
                  icon={faVolumeOff}
                />
              </div>
              <FontAwesomeIcon
                onClick={handleSurahPrevious}
                className=" cursor-pointer"
                icon={faBackward}
              />
              <FontAwesomeIcon
                className=" cursor-pointer"
                icon={isPlaying ? faPause : faPlay}
                onClick={togglePlayPause}
              />
              <FontAwesomeIcon
                onClick={handleSurahNext}
                className=" cursor-pointer "
                icon={faForward}
              />
              <FontAwesomeIcon
                onClick={handleDeltedAudio}
                className=" cursor-pointer"
                icon={faXmark}
              />
            </div>

            <input
              className=" absolute left-0 top-0 h-[2px] cursor-pointer  w-full"
              type="range"
              min="0"
              max={duration}
              value={currentTime}
              onChange={handleSeek}
            />

            <p className="text-xs sm:text-md">{formatTime(duration)}</p>
          </div>

          <img
            className=" absolute top-1 w-full opacity-[1%]  left-0"
            src={pattern}
            alt=""
          />
        </div>
      </div>
    )
  );
}

export default Audio;
