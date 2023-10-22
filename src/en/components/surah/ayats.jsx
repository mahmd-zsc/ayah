import React from "react";
import { useSelector } from "react-redux";
import TextOfAya from "./textOfAya";

function Ayats() {
  let surah = useSelector((state) => state.surah);
//   console.log(surah);

  return (
    !surah.loading && (
      <div className=" grid grid-cols-1  ">
        {surah.data.verses.map((aya, index) => (
          <div>
            <div className="  py-20 flex flex-col ">
              <TextOfAya aya={aya} number={index + 1} index={index} />
            </div>
            <div class="line w-full h-[2px] bg-mainBlue"></div>
          </div>
        ))}
      </div>
    )
  );
}

export default Ayats;
