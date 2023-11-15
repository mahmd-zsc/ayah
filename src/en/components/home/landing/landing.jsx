import React from "react";
import textQuran from "../../../../images/home/output-onlinepngtools.png";
import SearchBar from "./search/searchBar";
import RecentlyRead from "./RecentlyRead";

function Landing() {
  return (
    <div className=" relative landing   flex justify-between text-white  ">
      <div className=" bg absolute w-full -top-20 "></div>
      <div className="container flex flex-col items-center  flex-1 pt-5 h-full    ">
        <div>
          <img className=" relative opacity-30" src={textQuran} alt="" />
          <SearchBar />
        </div>
        {/* <RecentlyRead /> */}
      </div>
      <div className=" flex-1 hidden lg:block"></div>
    </div>
  );
}

export default Landing;
