import React from "react";
import { Link } from "react-router-dom";
import b from "../../../../images/home/pngegg (1).png";

function BoxSurah({ surah }) {
  return (
    <Link to={"/" + surah.id}>
      <div className="cursor-pointer relative z-20 text-white hover:text-mainRed duration-300 hover:-translate-y-1 ">
        <p className=" text-xs md:text-sm  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-center">
          {surah.name_simple}
        </p>

        <img className=" " src={b} alt="" />
      </div>
    </Link>
  );
}

export default BoxSurah;
