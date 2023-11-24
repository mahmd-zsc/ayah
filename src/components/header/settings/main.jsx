import { faDeleteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import TranslationBox from "./TranslationSetting/TranslationBox";
import ReciterBox from "./ReciterSetting/ReciterBox";

function Main({ settingsIcon }) {
  let selector = useSelector((state) => state.settings);
  return (
    <div
      className={` settings   relative h-full overflow-y-scroll  ${
        !selector.settingMenu ? " hidden" : null
      }`}
    >
      <div className=" px-4 ">
        <h1 className=" text-mainCreme font-bold uppercase mb-4">settings</h1>
      </div>

      <div className="line w-full h-[2px] bg-mainBlue"></div>
      <div className=" px-4 mt-10 flex flex-col gap-4">
        <TranslationBox />
        <ReciterBox />
      </div>
    </div>
  );
}

export default Main;
