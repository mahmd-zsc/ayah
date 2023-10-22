import React from "react";
import { useSelector } from "react-redux";
import boxImg from "../../../images/pngegg (1).png";

function SurahTitle() {
  let surahTitle = useSelector((state) => state.surahTitle);

  return (
    <div>
      <div className="title text-center mt-10 ">
        <div className=" relative flex justify-center">
          {!surahTitle.loading && (
            <h1 className=" absolute md:text-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              سورة {surahTitle.data.chapter.name_arabic}
            </h1>
          )}
          <img className=" w-60 md:w-80" src={boxImg} alt="" />
        </div>
        <h2 className=" text-xl md:text-2xl ">
          بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ
        </h2>
      </div>
    </div>
  );
}

export default SurahTitle;
