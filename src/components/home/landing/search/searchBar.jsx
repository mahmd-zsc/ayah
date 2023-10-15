import React, { useEffect, useRef, useState } from "react";
import searchImg from "../../../images/home/searchl.png";
import microphone from "../../../images/home/microphone.png";
import Research from "./research";
import SearchMenu from "./searchMenu";
import { useDispatch, useSelector } from "react-redux";
import { changeMicrophoneMode } from "../../../redux/settings/settingsActions";
import Microphone from "./microphone";
import {
  changeSearchMenuOpen,
  fetchSurahSearch,
  setTextOfSearch,
} from "./../../../redux/surahSearch/suraSearchAction";
import { useNavigate } from "react-router-dom";
import SpeechRecognition from "react-speech-recognition";

function SearchBar() {
  let form = useRef();
  let navigate = useNavigate();
  let [text, setText] = useState();
  const microphoneState = useSelector((state) => state.settings.microphone);
  const surahSearch = useSelector((state) => state.surahSearch);

  const dispatch = useDispatch();
  let handleSubmit = (e) => {
    e.preventDefault();
    if (surahSearch.text && surahSearch.text.trim().length > 0) {
      dispatch(changeSearchMenuOpen(false));
      navigate("/search");
    }
  };

  let handleChangeTextSearch = (e) => {
    setText(e.target.value);
  };
  let handleOpenMenu = () => {
    dispatch(changeSearchMenuOpen(true));
  };
  let handleCloseMenu = () => {
    dispatch(changeSearchMenuOpen(false));
  };
  useEffect(() => {
    dispatch(setTextOfSearch(text));
  }, [text]);
  return (
    <div className="w-full mt-20">
      <form ref={form} onSubmit={handleSubmit} className="relative" action="">
        <img
          className="w-6 absolute z-10 left-6 top-1/2 -translate-y-1/2"
          src={searchImg}
          alt=""
        />
        <input
          onFocus={handleOpenMenu}
          onBlur={handleCloseMenu}
          onChange={(e) => handleChangeTextSearch(e)}
          value={text}
          className="w-full py-4 pl-16 rounded-full bg-mainBlue outline-none text-white opacity-50 focus:opacity-100 duration-300 shadow-lg shadow-black"
          type="text"
        />

        <Microphone />
        <SearchMenu />
      </form>
      <Research />
    </div>
  );
}

export default SearchBar;
