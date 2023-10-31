import React from "react";
import boxAya from "../../../images/pngegg.png";
import { Link } from "react-router-dom";

function SearchAyah({ data }) {
  const options = {
    useGrouping: false,
    minimumIntegerDigits: 1,
    minimumFractionDigits: 0,
    maximumFractionDigits: 3,
    numberingSystem: "arab",
  };
  // let number = data.
  const arabicNumber = +data.verse_key
    .split(":")[1]
    .toLocaleString("ar", options);

  return (
    <Link
      to={`/${data.verse_key.split(":")[0]}?startingVerse=${
        data.verse_key.split(":")[1]
      }`}
    >
      <div dir="rtl" className=" bg-darkBlue py-10">
        <p className="text-2xl relative w-full">
          <span>{data.text}</span>
          <span className="relative mr-1">
            <img className="w-10 inline" src={boxAya} alt="" />
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/4 text-sm">
              {arabicNumber}
            </span>
          </span>
        </p>
      </div>
    </Link>
  );
}

export default SearchAyah;
