import React, { useRef } from "react";
import { useSelector } from "react-redux";
import TextOfAya from "./textOfAya";
import patern from "../../../../images/Pattern 186-PhotoRoom.png-PhotoRoom.png";
function TranslationAyats() {
  let ayaRef = useRef();
  let surah = useSelector((state) => state.surah);
  return (
    !surah.loading && (
      <div className=" grid grid-cols-1  ">
        {surah.data.verses.map((aya, index) => (
          <div ref={ayaRef} key={index} className=" relative  " id={index + 1}>
            <div className="  py-16 flex flex-col ">
              <TextOfAya aya={aya} number={index + 1} index={index} />
            </div>
            <div className="line w-full h-[2px] bg-mainBlue"></div>
            <img
              className=" absolute top-0 left-0 h-full min-w-full opacity-[0.50%] -z-10 "
              src={patern}
              alt=""
            />
          </div>
        ))}
        
      </div>
    )
  );
}

export default TranslationAyats;
