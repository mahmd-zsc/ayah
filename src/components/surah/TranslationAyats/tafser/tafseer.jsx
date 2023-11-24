import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeTaser } from "../../../../redux/settings/settingsActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faDeleteLeft,
} from "@fortawesome/free-solid-svg-icons";
import {
  fetchTafser,
  fetchTafserAyah,
} from "../../../../redux/tafserAyah/tafserAyahAction";
import { fetchAyah } from "../../../../redux/ayah/ayahAction";
import boxAya from "../../../../images/pngegg.png";
import TafserPagination from "./tafserPagination";
import { Link, useNavigate } from "react-router-dom";
import pattern from "../../../../images/Pattern 186-PhotoRoom.png-PhotoRoom.png";
function Tafser() {
  let openTafser = useSelector((state) => state.settings.tafser);
  let tafser = useSelector((state) => state.tafserAyah);
  console.log(tafser)
  let ayah = useSelector((state) => state.ayah);
  let dispatch = useDispatch();
  let navigate = useNavigate();
  const options = {
    useGrouping: false,
    minimumIntegerDigits: 1,
    minimumFractionDigits: 0,
    maximumFractionDigits: 3,
    numberingSystem: "arab",
  };
  const arabicNumber = tafser.ayahId
    ? tafser.ayahId.toLocaleString("ar", options)
    : "";

  let handleClose = () => {
    dispatch(changeTaser(false));
  };
  useEffect(() => {
    if (openTafser === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [openTafser]);
  useEffect(() => {
    dispatch(fetchTafserAyah(tafser.surahId, tafser.ayahId));
    dispatch(fetchAyah(tafser.surahId, tafser.ayahId));
  }, [tafser.ayahId]);
  let handleGoToTafser = () => {
    document.body.style.overflow = "auto";
    window.scrollTo({
      top: 0,
    });
    navigate(`/tafser?${tafser.surahId}:${tafser.ayahId}`);
    dispatch(changeTaser(false));
  };
  return (
    openTafser && (
      <div className="tafser fixed left-0 bottom-0 h-screen w-full flex justify-center items-center">
        <div
          dir="rtl"
          className="tafserBox relative flex flex-col   h-[80%] w-[80%] bg-mainBlue z-40 rounded-md overflow-y-scroll animate__animated animate__zoomIn px-6 py-20 "
        >
          {tafser.data && ayah.data.verses.length > 0 && (
            <>
              <div className="flex flex-col gap-8 flex-1">
                <div className=" flex items-center justify-between pb-10">
                  <p>{tafser.data.tafseer_name}</p>

                  <button
                    onClick={handleGoToTafser}
                    className=" text-sm text-mainRed opacity-100 hover:opacity-80 duration-300 "
                  >
                    More
                  </button>
                </div>
                <p dir="rtl" className="text-4xl relative w-full">
                  <span>{ayah.data.verses[0].text_uthmani}</span>
                  <span className="relative mr-1">
                    <img className="w-12 inline" src={boxAya} alt="" />
                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/4 text-sm">
                      {arabicNumber}
                    </span>
                  </span>
                </p>
                <div className="line w-full h-px bg-lightBlue"></div>
                <p className=" text-md sm:text-lg md:text-xl lg:text-2xl">
                  {tafser.data.text}
                </p>{" "}
              </div>

              <TafserPagination />
              <img
                className=" absolute left-0 top-0 opacity-[0.70%] h-full -z-10 w-full"
                src={pattern}
                alt=""
              />
              <FontAwesomeIcon
                className="cursor-pointer absolute top-6 right-6 opacity-50 hover:opacity-100 duration-300"
                onClick={handleClose}
                icon={faDeleteLeft}
                style={{ color: "white" }}
                rotation={180}
                size="xl"
              />
            </>
          )}
        </div>

        <div
          onClick={handleClose}
          className="absolute left-0 top-0 h-full w-full bg-black opacity-50"
        ></div>
      </div>
    )
  );
}

export default Tafser;
