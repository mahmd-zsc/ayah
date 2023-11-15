import { faDeleteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeSettingMenu } from "../../../redux/settings/settingsActions";

function Settings({ settingsIcon }) {
  let selector = useSelector((state) => state.settings);
  let settingRef = useRef();
  let settingImgRef = useRef();
  let dispatch = useDispatch();
  let handleClose = () => {
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
      if (
        settingsIcon &&
        settingsIcon.current &&
        settingRef &&
        !settingsIcon.current.contains(event.target) &&
        !settingRef.current.contains(event.target) &&
        !settingImgRef.current.contains(event.target)
      ) {
        dispatch(changeSettingMenu(false));
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <div
      ref={settingRef}
      className={`  fixed py-6    top-0 right-0   bg-darkBlue h-screen shadow-lg text-white shadow-black  duration-300 z-40   ${
        !selector.settingMenu
          ? " w-0 sm:w-0 "
          : "w-full sm:w-[340px] animate__animated animate__fadeInRight"
      }   `}
    >
      <div
        className={` flex justify-between items-center mb-4 px-4 ${
          !selector.settingMenu ? " hidden" : null
        }`}
      >
        <h1 className=" text-mainCreme font-bold uppercase">settings</h1>

        <FontAwesomeIcon
          className=" settingsIcon cursor-pointer  "
          onClick={handleClose}
          ref={settingImgRef}
          icon={faDeleteLeft}
          style={{ color: "gray" }}
          size="xl"
        />
      </div>
    </div>
  );
}

export default Settings;
