import { faDeleteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeSettingMenu,
  changeSettingPage,
} from "../../../../redux/settings/settingsActions";
import TranslationSetting from "./TranslationSetting/TranslationBox";
import { fetchTranslationsNames } from "./../../../../redux/translationsNames/translationsNamesAction";
import Main from "./main";
import TranslationMenu from "./TranslationSetting/TranslationMenu";
import ReciterMenu from "./ReciterSetting/ReciterMenu";
import { fetchTranslations } from "../../../../redux/translations/translationsAction";
import { fetchReciterNames } from "./../../../../redux/ReciterNames/ReciterNamesAction";

function Settings({ settingsIcon }) {
  let selector = useSelector((state) => state.settings);
  let authorId = useSelector((state) => state.translations.authorId);
  let settingRef = useRef();
  let settingImgRef = useRef();
  let bgRef = useRef();
  let dispatch = useDispatch();
  let handleClose = () => {
    dispatch(changeSettingPage("main"));

    dispatch(changeSettingMenu(false));
  };
  useEffect(() => {
    if (selector.settingMenu === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selector.settingMenu]);
  useEffect(() => {
    const handleClickOutside = (event) => {
      let change = document.querySelector(".change");
      if (
        settingsIcon &&
        settingsIcon.current &&
        settingRef &&
        !settingsIcon.current.contains(event.target) &&
        !settingRef.current.contains(event.target) &&
        bgRef.current.contains(event.target)
      ) {
        dispatch(changeSettingPage("main"));
        if (change && change.contains(event.target)) {
          dispatch(changeSettingMenu(true));
        } else {
          dispatch(changeSettingMenu(false));
        }
      }
    };
    // const handleClickOutside = (event) => {
    //   let change = document.querySelector(".change");
    //   if (
    //     settingsIcon &&
    //     settingsIcon.current &&
    //     settingRef &&
    //     !settingsIcon.current.contains(event.target) &&
    //     !settingRef.current.contains(event.target)
    //   ) {
    //     if (change && change.contains(event.target)) {
    //       dispatch(changeSettingMenu(true));
    //     } else {
    //       dispatch(changeSettingMenu(false));
    //     }
    //   }
    // };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);
  useEffect(() => {
    dispatch(fetchTranslationsNames());
    dispatch(fetchReciterNames());
  }, []);
  return (
    <>
      <div
        ref={settingRef}
        className={` settings   fixed pt-6    top-0 right-0     bg-darkBlue h-screen shadow-lg text-white shadow-black  duration-300 z-50   ${
          !selector.settingMenu
            ? " w-0 sm:w-0 "
            : "w-full sm:w-[340px] animate__animated animate__fadeInRight"
        }   `}
      >
        <div className=" relative  ">
          <FontAwesomeIcon
            className={` settingsIcon cursor-pointer absolute right-4 z-40 ${
              !selector.settingMenu ? " hidden " : ""
            } `}
            onClick={handleClose}
            ref={settingImgRef}
            icon={faDeleteLeft}
            style={{ color: "gray" }}
            size="xl"
          />
          {selector.page === "main" && <Main />}
          {selector.page === "translation" && <TranslationMenu />}
          {selector.page === "reciter" && <ReciterMenu />}
        </div>
      </div>
      <div
        ref={bgRef}
        className={` fixed left-0 top-0 h-screen     z-40 ${
          !selector.settingMenu ? " " : "w-full"
        }`}
      ></div>
    </>
  );
}

export default Settings;
