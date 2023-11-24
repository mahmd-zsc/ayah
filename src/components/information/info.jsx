import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSurahInfo } from "./../../redux/searchInfo/surahInfoAction";
import { fetchSurahList } from "../../redux/suraList/suraListAction";
import maka from "../../images/makkah.png";
import madina from "../../images/madina.jpg";
import { Link } from "react-router-dom";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../footer/footer";
import InfoLoading from "./infoLoading";
function Info() {
  let dispatch = useDispatch();
  let surahId = window.location.pathname.split("/")[1];
  let surahInfo = useSelector((state) => state.surahInfo);
  let surahList = useSelector((state) => state.surahList);
  let surahData = useSelector((state) => state.surahList.data.chapters);
  // console.log(surahData[surahId - 1]);
  useEffect(() => {
    dispatch(fetchSurahInfo(surahId));
    dispatch(fetchSurahList());
  }, []);
  useEffect(() => {
    // console.log("done")
    // setSurahData(surahList.data.chares && surahList.data.chares[surahId]);
  }, [surahList.loading]);
  let makaInfo =
    "Mecca Al-Mukarramah is the most honorable of countries and the best of places. The Sacred Land was chosen by God Almighty as a landing site for revelation and a qibla for Muslims, and He placed in it many rituals for His servants.The founding of Mecca dates back to before the birth of the Prophet Ishmael and his raising the foundations of the Kaaba with his father, the Prophet Ibrahim - peace be upon them. Mecca, at its beginning, was a small town inhabited by the sons of Adam until it was destroyed during the flood that struck the earth during the reign of the Prophet of God Noah. - Peace be upon him -, and after that the area became a dry valley surrounded by mountains on all sides.";
  let madinaInfo =
    "Medina is the city in which no one will be able to compete with the Muslims’ pride as they are proud of it. It is the first capital of Islam, the place of guidance, the abode of faith and the criterion, the incubator of the mosque of the Messenger of God, may God bless him and grant him peace, and his honorable grave. From it the principles of Islam were spread to all people, and under its banner the Arabian Peninsula was united. For the first time in history, Egypt, the Levant, Iraq, and Persia joined under its banner, so that the Arab tribes became a nation that fulfilled the promise of God Almighty through its hands, and was worthy of carrying this shining glory, generation after generation.";
  return (
    <>
      {!surahInfo.loading &&
        !surahList.loading &&
        surahList.data.chapters &&
        surahList.data.chapters.length > 0 && (
          <div className="  container flex flex-col gap-4 mb-6">
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
              <div className="">
                <Link to={"/" + surahId}>
                  <button className=" capitalize px-2 py-1 bg-mainBlue opacity-80 hover:opacity-100 duration-300 rounded-md mb-2">
                    <FontAwesomeIcon icon={faArrowLeft} />
                    <span className=" ml-1">go to surah</span>
                  </button>
                </Link>
                <img
                  src={
                    surahData[surahId].revelation_place === "makkah"
                      ? maka
                      : madina
                  }
                  alt=""
                />
              </div>
              <div className=" flex flex-col gap-2">
                <div className=" flex  justify-between flex-wrap gap-4">
                  <h2 className=" text-lg ">
                    surah {surahData[surahId - 1].name_simple}
                  </h2>
                  <h3>
                    Ayah
                    <span className=" text-mainRed block text-center">
                      {surahData[surahId - 1].verses_count}
                    </span>
                  </h3>
                  <h3>
                    Revelation Place
                    <span className=" block text-center text-sm font-semibold ">
                      {surahData[surahId - 1].revelation_place}
                    </span>
                  </h3>
                </div>
                <div className=" line h-px bg-lightBlue"></div>
                <p>
                  {surahData[surahId].revelation_place === "makkah"
                    ? makaInfo
                    : madinaInfo}
                </p>
              </div>
            </div>
            <p
              className=" text-gray-300"
              dangerouslySetInnerHTML={{
                __html: surahInfo.data.chapter_info.text,
              }}
            />
            <div className=" line h-px bg-lightBlue"></div>
          </div>
        )}
      {surahInfo.loading && surahList.loading && <InfoLoading />}
    </>
  );
}

export default Info;
