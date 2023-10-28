import React from "react";
import { Link, useNavigate } from "react-router-dom";
import b from "../../../../images/pngegg (1).png";
function BoxSurah({ surah }) {
  let navigate = useNavigate();
  let handleGoSurah = () => {
    navigate("/" + surah.id);
    window.scrollTo({
      top: "0",
    });
  };
  return (
    <div
      onClick={handleGoSurah}
      className="cursor-pointer relative z-20 text-white hover:text-mainRed duration-300 hover:-translate-y-1 "
    >
      <p className=" text-xs   absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-center">
        {surah.name_simple}
      </p>

      <img className=" " src={b} alt="" />
    </div>
  );
}

export default BoxSurah;
