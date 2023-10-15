import React from "react";
import "animate.css";
import { useDispatch, useSelector } from "react-redux";
import close from "../images/heder/delete.png";
import { changeMenuMode } from "../redux/settings/settingsActions";
function MenuBar() {
  let settings = useSelector((state) => state.settings);
  let dispatch = useDispatch();
  let handleClose = () => {
    dispatch(changeMenuMode(false));
  };
  return (
    <div
      className={`  fixed py-6 px-10   top-0 right-0 w-full sm:w-[340px]  bg-darkBlue h-screen shadow-lg shadow-black  duration-300 z-40 ${
        !settings.menu ? " hidden" : null
      }   `}
    >
      <img onClick={handleClose} className=" w-8" src={close} alt="" />
    </div>
  );
}

export default MenuBar;
