import React from "react";
import "../../loading.css";

function LoadingSearch() {
  return (
    <>
      <div className="loading h-8 w-32"></div>
      <div className="bg-mainBlue grid grid-cols-1 gap-px pb-px">
        {Array.from({ length: 6 }).map((_, index) => (
          <div className="  bg-darkBlue py-8 flex flex-col gap-4 " key={index}>
            <div className="loading h-8 w-20"></div>
            <div className="loading h-14 w-[90%] ml-auto"></div>
          </div>
        ))}
      </div>
      <div className=" flex gap-2 p-8  justify-center">
        {Array.from({ length: 6 }).map((_, index) => (
          <div className="loading h-8 w-8 rounded-lg"></div>
        ))}
      </div>
    </>
  );
}

export default LoadingSearch;
