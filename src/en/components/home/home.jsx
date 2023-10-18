import React from "react";

import Artical from "./artical/artical";
import pattern from "../../../images/pattern.png";
import patternTwo from "../../../images/Pattern 186-PhotoRoom.png-PhotoRoom.png";
import Landing from "./landing/landing";
import { BrowserRouter } from "react-router-dom";

function Home() {
  return (
    <div className=" relative     ">
      
      <Landing />
      <div className=" h-12 w-full relative overflow-hidden bg-darkBlue z-10">
        <img className=" absolute left-0 top-1/2 w-full  -translate-y-1/2 opacity-50 " src={pattern} alt="" />
      </div>
      <Artical />
    </div>
  );
}

export default Home;
