import React, { useEffect, useRef, useState } from "react";
import searchImg from "../../../../images/home/searchl.png";
import microphone from "../../../../images/home/microphone.png";
import Research from "./research";
import SearchMenu from "./searchMenu";
import { useDispatch, useSelector } from "react-redux";

import Microphone from "./microphone";

import { useNavigate } from "react-router-dom";
import SpeechRecognition from "react-speech-recognition";
import {
  changeSearchMenuOpen,
  changeSearchPage,
  fetchSurahSearch,
  setSearchData,
  setTextOfSearch,
} from "../../../../redux/surahSearch/suraSearchAction";

function SearchBar() {
  let form = useRef();
  let input = useRef();
  let navigate = useNavigate();
  const surahSearch = useSelector((state) => state.surahSearch);
  let [text, setText] = useState("");
  let [page, setPage] = useState(
    window.location.search.split("=")[1].match(/\d+/g)[0]
  );

  const dispatch = useDispatch();
  let handleSubmit = (e) => {
    e.preventDefault();
    if (surahSearch.text && surahSearch.text.trim().length > 0) {
      dispatch(changeSearchMenuOpen(false));
      dispatch(setSearchData(surahSearch.data.search));
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
    const decodedText = decodeURIComponent(
      window.location.search.split("=")[2]
    );

    const fetchData = async () => {
      try {
        await dispatch(fetchSurahSearch(decodedText, page));
        setText(decodedText);
      } catch (error) {}
    };

    fetchData().then(() => {
      dispatch(setSearchData(surahSearch.data.search));
    });
    dispatch(changeSearchPage(page));
  }, []);

  useEffect(() => {
    dispatch(setTextOfSearch(text));
  }, [text]);
  useEffect(() => {
    dispatch(setSearchData(surahSearch.data.search));
  }, [surahSearch.data]);

  return (
    <div className="w-full py-10">
      <form
        onClick={focusInput}
        ref={form}
        onSubmit={handleSubmit}
        className="relative"
        action=""
      >
        <Microphone setText={setText} />
        <SearchMenu searchBar={form} />

        <input
          dir="rtl"
          placeholder="Search for the verse"
          ref={input}
          onFocus={handleOpenMenu}
          onChange={(e) => setText(e.target.value)}
          value={text}
          className="w-full py-4 pr-16 rounded-lg bg-mainBlue outline-none text-white opacity-50 focus:opacity-100 duration-300 shadow-lg shadow-black"
          type="text"
        />
        <img
          className="w-6 absolute z-10 right-6 top-1/2 -translate-y-1/2"
          src={searchImg}
          alt=""
        />
      </form>
      {/* <Research /> */}
    </div>
  );
}

export default SearchBar;
