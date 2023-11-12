import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSurahInfo } from "./../../../redux/searchInfo/surahInfoAction";
import { fetchSurahList } from "../../../redux/suraList/suraListAction";

function Info() {
  let surahId = window.location.pathname.split("/")[1];
  let surahInfo = useSelector((state) => state.surahInfo);
  let surahList = useSelector((state) => state.surahList);
  console.log(surahList);
  //   console.log(surahInfo)
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSurahInfo(surahId));
    dispatch(fetchSurahList());
  }, []);
  return <div className=" min-h-screen"></div>;
}

export default Info;
