import React, { useEffect, useRef, useState } from "react";
import searchImg from "../../../../images/home/searchl.png";
import Research from "./research";
import SearchMenu from "./searchMenu";
import { useDispatch, useSelector } from "react-redux";

import Microphone from "./microphone";

import { useNavigate } from "react-router-dom";
import {
  changeSearchMenuOpen,
  setTextOfSearch,
} from "../../../../redux/surahSearch/suraSearchAction";

function SearchBar() {
  let form = useRef();
  let input = useRef();
  let navigate = useNavigate();
  let [text, setText] = useState("");
  const microphoneState = useSelector((state) => state.settings.microphone);
  const surahSearch = useSelector((state) => state.surahSearch);

  const dispatch = useDispatch();
  let handleSubmit = (e) => {
    e.preventDefault();
    if (surahSearch.text && surahSearch.text.trim().length > 0) {
      console.log("done");
      dispatch(changeSearchMenuOpen(false));
      navigate(`/search?page=1&?q=${text}`);
    }
  };

  let handleOpenMenu = () => {
    dispatch(changeSearchMenuOpen(true));
  };
  const focusInput = () => {
    input.current.focus();
  };

  useEffect(() => {
    dispatch(setTextOfSearch(text));
  }, [text]);

  return (
    <div className="w-full mt-20 mb-96 ">
      <form ref={form} onSubmit={handleSubmit} className="relative" action="">
        <img
          className="w-6 absolute z-10 left-6 top-1/2 -translate-y-1/2"
          src={searchImg}
          alt=""
        />
        <input
          placeholder="Search for the verse"
          ref={input}
          onFocus={handleOpenMenu}
          onChange={(e) => setText(e.target.value)}
          value={text}
          className="w-full py-4 pl-16 rounded-full bg-mainBlue outline-none text-white opacity-50 focus:opacity-100 duration-300 shadow-lg shadow-black"
          type="text"
        />
        <Microphone setText={setText} />
        <SearchMenu searchBar={form} />
      </form>
      <Research />
    </div>
  );
}

export default SearchBar;
