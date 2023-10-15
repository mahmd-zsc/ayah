import React, { useEffect } from "react";
import pattern from "../../images/pattern.png";
import { useDispatch, useSelector } from "react-redux";
import { fetchSurahList } from "../../redux/suraList/suraListAction";
import { Link } from "react-router-dom";
import BoxSurah from "./boxSurah";

function Artical() {
  const dispatch = useDispatch();
  const surahList = useSelector((state) => state.surahList);
  // console.log(surahList);

  useEffect(() => {
    dispatch(fetchSurahList());
  }, [dispatch]);

  return (
    <div className="relative bg-darkBlue">
      <div className=" container text-white pt-20">
        <h4 className="mb-2 font-bold text-lg">surah</h4>
        <div className="line w-full h-[2px] bg-mainBlue"></div>
      </div>
      <div className="container  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 z-20">
        {!surahList.loading ? (
          surahList.data.chapters.map((surah, index) => (
            <BoxSurah key={index} surah={surah} />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <img
        className="absolute w-full h-full left-0 top-0 opacity-[1%] "
        src={pattern}
        alt=""
      />
    </div>
  );
}

export default Artical;
