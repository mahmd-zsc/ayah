import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSurah } from "../../../redux/search/surahAction";
import { fetchSurahInfo } from "./../../../redux/searchInfo copy/surahInfoAction";
import { fetchSurahTitle } from "./../../../redux/surahTitle/surahTitleAction";
import TypeOfRead from "./typeOfRead";
import besm from "../../../images/[CITYPNG.COM]HD أبيض Bismilah Arab Calligraphy بسم الله الرحمان الرحيم Basmalah PNG - 2500x2500.png";
import SurahTitle from "./surahTitle";
import Ayats from "./ayats";
import pattern from "../../../images/pattern.png";
import { fetchTranslations } from "../../../redux/translations/translationsAction";
function Surah() {
  let id = useParams().surahId;
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSurahTitle(id));
    dispatch(fetchSurah(id));
    dispatch(fetchTranslations(id));
  }, []);
  return (
    <div className=" surahPage min-h-screen bg-darkBlue text-white relative pb-20 ">
      <div className=" relative   container flex flex-col z-20   ">
        <SurahTitle />
        <Ayats />
      </div>
      {/* <img
        className=" absolute top-0 left-0 min-w-full h-full opacity-[1%]  "
        src={pattern}
        alt=""
      /> */}
    </div>
  );
}

export default Surah;
