import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function Research() {
  let surah = [1, 18, 36, 112,12];
  let surahList = useSelector((state) => state.surahList);
  return (
    <div className=" research flex flex-wrap items-center justify-center gap-1 lg:gap-4 mt-10">
      {surah.map((s, index) => (
        <Link key={index} to={`/` + s}>
          <div
            key={index}
            className=" capitalize relative px-2 bg-mainBlue flex justify-center items-center  py-2 rounded-full cursor-pointer shadow-sm hover:shadow-black duration-300 hover:-translate-y-1 opacity-70 hover:opacity-100  "
          >
            {surahList.data.chapters[s - 1].name_simple}
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Research;
