import React from "react";
import { useSelector } from "react-redux";
import boxImg from "../../../images/pngegg (1).png";
import besm from "../../../images/[CITYPNG.COM]HD أبيض Bismilah Arab Calligraphy بسم الله الرحمان الرحيم Basmalah PNG - 2500x2500.png";
import Pattern from "../../../images/Pattern 186-PhotoRoom.png-PhotoRoom.png";
function SurahTitle() {
  let surahTitle = useSelector((state) => state.surahTitle);

  return (
    <div className="relative overflow-hidden">
      <div className="  title text-center    ">
        <div className=" relative flex justify-center ">
          {!surahTitle.loading && (
            <h1 className=" absolute md:text-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              سورة {surahTitle.data.chapter.name_arabic}
            </h1>
          )}
          <img className=" w-60 md:w-80 " src={boxImg} alt="" />
        </div>

        <img
          className="w-60 m-auto relative bottom-20 opacity-60"
          src={besm}
          alt=""
        />
      </div>
      <img className=" absolute top-0 left-0 -z-10 opacity-[0.60%] " src={Pattern} alt="" />
    </div>
  );
}

export default SurahTitle;
