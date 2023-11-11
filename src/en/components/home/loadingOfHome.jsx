import React, { useEffect } from "react";
import icon from "../../../images/decoration.png";
function LoadingOfHome() {
  return (
    <div className=" h-screen w-full absolute top-0 left-0 z-50 bg-[#121f42] flex justify-center items-center">
      <img className=" logo " src={icon} alt="" />
    </div>
  );
}

export default LoadingOfHome;
