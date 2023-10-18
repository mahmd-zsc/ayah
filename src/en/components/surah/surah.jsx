import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSurah } from "../../../redux/search/surahAction";
import { fetchSurahInfo } from "./../../../redux/searchInfo copy/surahInfoAction";
import { fetchSurahTitle } from "./../../../redux/surahTitle/surahTitleAction";
import TypeOfRead from "./typeOfRead";
import SurahTitle from "./surahTitle";
import besm from "../../../images/[CITYPNG.COM]HD أبيض Bismilah Arab Calligraphy بسم الله الرحمان الرحيم Basmalah PNG - 2500x2500.png";
function Surah() {
  let id = useParams().surahId;
  let surahTitle = useSelector((state) => state.surahTitle.data.chapter);
  console.log(surahTitle);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSurahTitle(id));
  }, []);
  return (
    <div className=" h-screen bg-darkBlue text-white ">
      <div className=" container flex flex-col items-center ">
        <img className=" w-40" src={besm} alt="" />
      </div>
      {/* <h1>{surahTitle.name_arabic}</h1> */}
    </div>
  );
}

export default Surah;
