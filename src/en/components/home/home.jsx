import React, { useEffect } from "react";

import Artical from "./artical/artical";
import pattern from "../../../images/pattern.png";
import patternTwo from "../../../images/Pattern 186-PhotoRoom.png-PhotoRoom.png";
import Landing from "./landing/landing";
import { useDispatch } from "react-redux";
import {
  changeMenuMode,
  changeTaser,
} from "../../../redux/settings/settingsActions";

function Home() {
  let test = document.querySelector(".test");
  let dispatch = useDispatch();
  useEffect(() => {
    document.body.style.overflow = "auto";
    dispatch(changeMenuMode(false));
    dispatch(changeTaser(false));
  }, []);
  return (
    <div className=" relative     ">
      <Landing />
      <div className=" h-16 w-full relative overflow-hidden bg-darkBlue z-10">
        <img
          className=" test absolute left-0 h-[600%] top-1/2 w-full  -translate-y-1/2 opacity-20 "
          src={patternTwo}
          alt=""
        />
      </div>
      <Artical />
    </div>
  );
}

export default Home;
