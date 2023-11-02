import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeSearchMenuOpen,
  fetchSurahSearch,
} from "../../../../redux/surahSearch/suraSearchAction";
import { Link, useNavigate } from "react-router-dom";

function SearchMenu({ searchBar }) {
  let searchMenu = useRef();
  let surahSearch = useSelector((state) => state.surahSearch);
  let naviagte = useNavigate();
  let dispatch = useDispatch();
  let handleClickOnAyah = (s) => {
    let link = s.verse_key.split(":");
    naviagte(`/${link[0]}?startingVerse=${link[1]}`);
  };
  useEffect(() => {
    dispatch(fetchSurahSearch(surahSearch.text));
  }, [surahSearch.text]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchMenu.current &&
        !searchMenu.current.contains(event.target) &&
        searchBar.current &&
        !searchBar.current.contains(event.target)
      ) {
        dispatch(changeSearchMenuOpen(false));
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <>
      {surahSearch.data &&
        surahSearch.data.search &&
        surahSearch.open &&
        surahSearch.data.search.results.length > 0 && (
          <div
            ref={searchMenu}
            className="searchMenu absolute left-1/2  top-16 -translate-x-1/2 w-full max-h-96 bg-mainBlue rounded-b-lg z-10 shadow-sm shadow-black  overflow-y-scroll py-4 px-4 flex flex-col gap-2   "
          >
            {surahSearch.data.search.results.map((s, index) => (
              
              <div
                onClick={() => handleClickOnAyah(s)}
                key={index}
                className=" px-2 h-fit  py-2 hover:bg-darkBlue rounded-lg cursor-pointer duration-200"
              >
                {s.text}
              </div>
              
            ))}
          </div>
        )}
    </>
  );
}

export default SearchMenu;
