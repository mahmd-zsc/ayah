import React, { useEffect, useRef, useState } from "react";
import boxAya from "../../../images/pngegg.png";
import Translations from "./translations";
import AyahMenu from "./ayahMenu";

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
    <div className="aya flex flex-col md:flex-row gap-10 h-full">
      <AyahMenu
        ayahNumber={number}
        ayaText={aya.text_uthmani}
        verse_key={aya.verse_key}
      />
      <div className="flex flex-col gap-10 flex-1">
        <p dir="rtl" className="text-4xl relative w-full">
          <span>{aya.text_uthmani}</span>
          <span className="relative mr-1">
            <img className="w-12 inline" src={boxAya} alt="" />
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/4 text-sm">
              {arabicNumber}
            </span>
          </span>
        </p>

        <Translations index={index} />
      </div>
    </div>
  );
}

export default TextOfAya;
