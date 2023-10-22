import React from "react";
import boxAya from "../../../images/pngegg.png";
import Translations from "./translations";

function TextOfAya({ aya, number, index }) {
  const options = {
    useGrouping: false,
    minimumIntegerDigits: 1,
    minimumFractionDigits: 0,
    maximumFractionDigits: 3,
    numberingSystem: "arab",
  };
  const arabicNumber = number.toLocaleString("ar", options);

  return (
    <div className="flex flex-col gap-10">
      <p dir="rtl" className="text-2xl relative w-fit mr-auto ">
        <span>{aya.text_uthmani}</span>
        <span className=" relative mr-1">
          <img className=" w-10 inline  " src={boxAya} alt="" />
          <span className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/4 text-xs   ">
            {arabicNumber}
          </span>
        </span>
      </p>

      <Translations index={index} />
    </div>
  );
}

export default TextOfAya;
