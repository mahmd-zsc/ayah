import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSurahSearch } from "../../../redux/surahSearch/suraSearchAction";

function SearchMenu() {
  let surahSearch = useSelector((state) => state.surahSearch);

  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSurahSearch(surahSearch.text));
  }, [surahSearch.text]);
  return (
    <>
      {surahSearch.data &&
        surahSearch.data.search &&
        surahSearch.open &&
        surahSearch.data.search.results.length > 0 && (
          <div className="searchMenu absolute left-1/2  top-16 -translate-x-1/2 w-[90%] h-96 bg-mainBlue rounded-b-lg z-10 shadow-sm shadow-black  overflow-y-scroll py-4 px-4 grid grid-cols-1 gap-2   ">
            {surahSearch.data.search.results.map((s, index) => (
              <div
                key={index}
                className=" px-2  py-2 hover:bg-darkBlue rounded-lg cursor-pointer duration-200"
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
