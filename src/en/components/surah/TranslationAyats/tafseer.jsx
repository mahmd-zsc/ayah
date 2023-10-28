import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  cahngeTaser,
  changeTaser,
} from "../../../../redux/settings/settingsActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDeleteLeft } from "@fortawesome/free-solid-svg-icons";
import { fetchTafser } from "../../../../redux/tafser/tafserAction";

function Tafser() {
  let openTafser = useSelector((state) => state.settings.tafser);
  let tafser = useSelector((state) => state.tafser);
  console.log(tafser)
  let dispatch = useDispatch();
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
    dispatch(fetchTafser(tafser.author, tafser.surah, tafser.ayah));
  }, []);
  useEffect(() => {
    // console.log(tafser);
  });
  return (
    openTafser && (
      <div className=" tafser fixed  left-0 bottom-0 h-screen w-full  flex justify-center items-center ">
        <div className=" tafserBox relative h-[80%] w-[80%]  bg-mainBlue z-40 rounded-md overflow-y-scroll animate__animated animate__zoomIn px-10 py-12">
          <FontAwesomeIcon
            className=" cursor-pointer absolute top-6 right-6 opacity-50 hover:opacity-100 duration-300  "
            onClick={handleClose}
            icon={faDeleteLeft}
            style={{ color: "white" }}
            rotation={180}
            size="xl"
          />
        </div>
        <div
          onClick={handleClose}
          className=" absolute left-0 top-0 h-full w-full bg-black opacity-50"
        ></div>
      </div>
    )
  );
}

export default Tafser;
