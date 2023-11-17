import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeSettingPage,
  changeTranslationSettingOpen,
} from "../../../../../redux/settings/settingsActions";
import Menu from "./TranslationMenu";

function TranslationBox() {
  let dispatch = useDispatch();

 
  return (
    <div className=" ">
      <div className="flex flex-col gap-2   ">
        <p>Translation</p>
        <div
          onClick={() => dispatch(changeSettingPage("translation"))}
          className=" flex items-center justify-between py-4 bg-mainBlue  px-2 rounded-md cursor-pointer overflow-hidden  "
        >
          <div>
            <p className=" capitalize text-xs opacity-50">
              selected translation
            </p>
           
          </div>
          <FontAwesomeIcon icon={faAngleRight} />
        </div>
      </div>
    </div>
  );
}

export default TranslationBox;
