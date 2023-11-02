import React, { useEffect, useState } from "react";
import boxAya from "../../../images/pngegg.png";
import { Link } from "react-router-dom";
import axios from "axios";

function SearchAyah({ data }) {
  let [surahData, setSurahData] = useState();
  // console.log(surahData);
  const options = {
    useGrouping: false,
    minimumIntegerDigits: 1,
    minimumFractionDigits: 0,
    maximumFractionDigits: 3,
    numberingSystem: "arab",
  };
  const renderAyah = () => {
    if (data.highlighted !== null) {
      const translationText = data.highlighted;

      return <span dangerouslySetInnerHTML={{ __html: translationText }} />;
    } else {
      const translationText = data.text;

      return <span dangerouslySetInnerHTML={{ __html: translationText }} />;
    }
  };
  let n = +data.verse_key.split(":")[1];

  const arabicNumber = n.toLocaleString("ar", options);
  useEffect(() => {
    axios
      .get(
        `https://api.quran.com/api/v4/chapters/${
          data.verse_key.split(":")[0]
        }?language=en`
      )
      .then((res) => setSurahData(res.data.chapter));
  }, []);

  return (
    <div dir="rtl" className=" relative flex flex-col gap-4 bg-darkBlue py-10">
      {surahData && (
        <Link
          to={`/${data.verse_key.split(":")[0]}?startingVerse=${
            data.verse_key.split(":")[1]
          }`}
        >
          <p dir="ltr " className=" w-fit mr-auto text-sm text-gray-400 hover:text-mainRed duration-300">
            {surahData.name_complex} <span className=" ">{data.verse_key}</span>
          </p>{" "}
        </Link>
      )}

      <p className="text-2xl relative w-full ">
        {renderAyah()}
        <span className="relative mr-1">
          <img className="w-10 inline" src={boxAya} alt="" />
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/4 text-sm">
            {arabicNumber}
          </span>
        </span>
      </p>
    </div>
  );
}

export default SearchAyah;
