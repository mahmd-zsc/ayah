import React, { useEffect, useRef, useState } from "react";
import searchImg from "../../../../images/home/searchl.png";
import SearchMenu from "./searchMenu";
import { useDispatch, useSelector } from "react-redux";

import Microphone from "./microphone";

import { useNavigate } from "react-router-dom";
import {
  changeSearchMenuOpen,
  fetchSurahSearch,
  setSearchData,
} from "../../../../redux/surahSearch/suraSearchAction";
import { fetchSearchData } from "../../../../redux/searchData/SearchDataAction";

function SearchBar() {
  let form = useRef();
  let input = useRef();
  let navigate = useNavigate();

  const surahSearch = useSelector((state) => state.surahSearch);
  let decodedText = decodeURIComponent(window.location.search.split("=")[2]);
  let [text, setText] = useState("");
  let [page, setPage] = useState(
    +window.location.search.split("=")[1]?.match(/\d+/g)[0]
  );
  const dispatch = useDispatch();
  let handleSubmit = (e) => {
    e.preventDefault();
    if (text && text.trim().length > 0) {
      dispatch(changeSearchMenuOpen(false));
      navigate(`/search?page=1&q=${text}`);
      dispatch(fetchSearchData(text, page));
    }
  };

  let handleOpenMenu = () => {
    dispatch(changeSearchMenuOpen(true));
  };
  const focusInput = () => {
    input.current.focus();
  };
  useEffect(() => {
    setText(decodedText);
  }, []);
  useEffect(() => {
    dispatch(fetchSurahSearch(text, 1));
  }, [text]);

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
          placeholder="Search for the verse"
          ref={input}
          onFocus={handleOpenMenu}
          onChange={(e) => setText(e.target.value)}
          value={text}
          className="w-full py-4 pl-16 rounded-lg bg-mainBlue outline-none text-white opacity-50 focus:opacity-100 duration-300 shadow-lg shadow-black"
          type="text"
        />
        <img
          className="w-6 absolute z-10 left-6 top-1/2 -translate-y-1/2"
          src={searchImg}
          alt=""
        />
      </form>
      {/* <Research /> */}
    </div>
  );
}

export default SearchBar;
