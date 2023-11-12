import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAyah } from "../../../redux/ayah/ayahAction";
import boxAya from "../../../images/pngegg.png";
import { Link } from "react-router-dom";
import axios from "axios";

function AyahOfTafser() {
  const [surahName, setSurahName] = useState("");
  const surahId = window.location.search.split(":")[0].substring(1);
  const ayahId = window.location.search.split(":")[1];
  const ayah = useSelector((state) => state.ayah);
  const [options, setOptions] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAyah(surahId, ayahId));
  }, []);

  useEffect(() => {
    if (ayah.data && ayah.data.verses && ayah.data.verses.length > 0) {
      setOptions({
        useGrouping: false,
        minimumIntegerDigits: 1,
        minimumFractionDigits: 0,
        maximumFractionDigits: 3,
        numberingSystem: "arab",
      });
      axios
        .get(
          `https://api.quran.com/api/v4/chapters/${
            ayah.data.verses[0].verse_key.split(":")[0]
          }?language=en`
        )
        .then((res) => setSurahName(res.data.chapter.name_complex));
    }
  }, [ayah.data]);

  const number =
    ayah.data && ayah.data.verses && ayah.data.verses.length > 0
      ? +ayah.data.verses[0].verse_key.split(":")[1]
      : null;
  const arabicNumber = number ? number.toLocaleString("ar", options) : "";

  return (
    !ayah.loading &&
    ayah.data &&
    ayah.data.verses &&
    ayah.data.verses.length > 0 && (
      <div className=" pt-20 md:pt-40">
        <Link
          to={`/${ayah.data.verses[0].verse_key.split(":")[0]}?startingVerse=${
            ayah.data.verses[0].verse_key.split(":")[1]
          }`}
        >
          <p
            dir="ltr "
            className=" w-fit mr-auto mb-2 text-sm text-gray-400 hover:text-mainRed duration-300"
          >
            <span className=" ">
              {surahName} {ayah.data.verses[0].verse_key}
            </span>
          </p>{" "}
        </Link>
        <p dir="rtl" className="text-4xl pb-6 relative w-full">
          <span>{ayah.data.verses[0].text_uthmani}</span>
          <span className="relative mr-1">
            <img className="w-12 inline" src={boxAya} alt="" />
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/4 text-sm">
              {arabicNumber}
            </span>
          </span>
        </p>
        <div className="line h-px bg-lightBlue  "></div>
      </div>
    )
  );
}

export default AyahOfTafser;
