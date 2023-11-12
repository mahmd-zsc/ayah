import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTafser } from "../../../redux/tafser/tafserAction";
import { fetchSurahList } from "./../../../redux/suraList/suraListAction";
import OptionOfTafser from "./optionOfTafser";
import AyahOfTafser from "./ayahOfTafser";
import { fetchAyah } from "./../../../redux/ayah/ayahAction";
import TafserText from "./tafserText";

function Tafser() {
  let surahList = useSelector((state) => state.surahList);
  let dispatch = useDispatch();
  useEffect(() => {
    // dispatch(fetchTafser(1, 1));
    dispatch(fetchSurahList());
  }, []);
  return (
    <div className=" min-h-screen bg-darkBlue mt-20 container">
      <OptionOfTafser />
      <AyahOfTafser />
      <TafserText />
    </div>
  );
}

export default Tafser;
