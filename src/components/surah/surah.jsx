import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
// import { fetchSurah } from "../../../redux/surahSearch/suraSearchAction";
import { fetchSurahTitle } from "./../../redux/surahTitle/surahTitleAction";
import SurahTitle from "./surahTitle";
import TranslationAyats from "./TranslationAyats/TranslationAyats";
import { fetchTranslations } from "../../redux/translations/translationsAction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo, faPlay } from "@fortawesome/free-solid-svg-icons";
import SurahPagination from "./surahPagination";
import { addRecentlySurah } from "../../redux/RecentlyRead/RecentlyReadAction";
import Tafser from "./TranslationAyats/tafser/tafseer";
import { fetchSurah } from "../../redux/surah/surahAction";
import { fetchAudio } from "../../redux/audio/audioAction";
import {
  changeSettingMenu,
  changeSettingPage,
} from "../../redux/settings/settingsActions";
import SurahLoading from "./surahLoading";
function Surah() {
  let [ayah, setAyah] = useState(null);
  let id = useParams().surahId;
  let translationsInfo = useSelector((state) => state.translations);
  let ReciterId = useSelector((state) => state.audio.ReciterId);
  let surah = useSelector((state) => state.surah);

  let handleChangeAuthorClick = () => {
    dispatch(changeSettingMenu(true));
    dispatch(changeSettingPage("translation"));
  };
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSurahTitle(id));
    dispatch(fetchSurah(id));
    dispatch(fetchTranslations(translationsInfo.authorId, id));
    dispatch(addRecentlySurah(id));
  }, [id]);
  useEffect(() => {
    dispatch(fetchTranslations(translationsInfo.authorId, id));
  }, [translationsInfo.authorId]);
  useEffect(() => {
    if (window.location.search.includes("?")) {
      const ayahId = +window.location.search.match(/\d+/g)[0];
      const ayah = document.getElementById(ayahId);
      if (ayah) {
        ayah.scrollIntoView();
      }
    } else {
      window.scrollTo({ top: 0 });
    }
  }, [translationsInfo]);

  return (
    <>
      {!surah.loading && surah.data.verses.length > 0 && (
        <div className=" surahPage min-h-screen bg-darkBlue text-white relative pb-20 ">
          <div className=" relative   container flex flex-col z-20    ">
            <SurahTitle />
            <div className=" relative sm:bottom-10 flex flex-col sm:flex-row justify-between  sm:items-center  gap-4  ">
              {!translationsInfo.loading && (
                <p>
                  {translationsInfo.data.meta.translation_name}{" "}
                  <span
                    onClick={handleChangeAuthorClick}
                    className=" change text-mainRed cursor-pointer "
                  >
                    (change)
                  </span>
                </p>
              )}
              <Link to={`/${id}/info`}>
                <button className=" flex items-center gap-1 hover:bg-mainBlue p-1 rounded-lg duration-200 cursor-pointer capitalize ">
                  <FontAwesomeIcon icon={faCircleInfo} />
                  surah info
                </button>
              </Link>
            </div>
            <div
              onClick={() => dispatch(fetchAudio(ReciterId, id))}
              className=" relative bottom-8 flex items-center gap-1 hover:bg-mainBlue p-1 rounded-lg duration-200 cursor-pointer ml-auto   "
            >
              <FontAwesomeIcon className="icon" icon={faPlay} />
              <span className=" capitalize">play audio</span>
            </div>
            {/* <ReadingAyats /> */}

            <TranslationAyats />
            <SurahPagination />
            <Tafser />
          </div>
        </div>
      )}
      {surah.loading && <SurahLoading />}
    </>
  );
}

export default Surah;
