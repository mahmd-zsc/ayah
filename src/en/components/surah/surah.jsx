import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSurah } from "../../../redux/search/surahAction";
import { fetchSurahTitle } from "./../../../redux/surahTitle/surahTitleAction";
import SurahTitle from "./surahTitle";
import TranslationAyats from "./TranslationAyats/TranslationAyats";
import { fetchTranslations } from "../../../redux/translations/translationsAction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import SurahPagination from "./surahPagination";
import { addRecentlySurah } from "../../../redux/RecentlyRead/RecentlyReadAction";
import { changeSettingMenu } from "../../../redux/settings/settingsActions";
import Tafser from "./TranslationAyats/tafser/tafseer";
function Surah() {
  let id = useParams().surahId;

  let translationsInfo = useSelector((state) => state.translations);
  let handleChangeAuthorClick = () => {
    dispatch(changeSettingMenu(true));
  };
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSurahTitle(id));
    dispatch(fetchSurah(id));
    dispatch(fetchTranslations(id));
    dispatch(addRecentlySurah(id));
  }, [id]);

  return (
    <div className=" surahPage min-h-screen bg-darkBlue text-white relative pb-20 ">
      <div className=" relative   container flex flex-col z-20    ">
        <SurahTitle />
        <div className=" relative bottom-10 flex justify-between items-center  ">
          {!translationsInfo.loading && (
            <p>
              {translationsInfo.data.meta.translation_name}{" "}
              <span
                onClick={handleChangeAuthorClick}
                className=" text-mainRed cursor-pointer "
              >
                (change)
              </span>
            </p>
          )}
          <p className=" flex items-center gap-1 hover:bg-mainBlue p-1 rounded-lg duration-200 cursor-pointer ">
            <FontAwesomeIcon icon={faCircleInfo} />
            Info
          </p>
        </div>
        {/* <ReadingAyats /> */}

        <TranslationAyats />
        <SurahPagination />
        <Tafser />
      </div>
    </div>
  );
}

export default Surah;
