import React from "react";

function InfoLoading() {
  return (
    <div className="container flex flex-col gap-4 mb-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
        <div className="">
          <div className=" loading h-8 w-32 mb-2 rounded-md"></div>
        <div className=" loading w-full h-96"></div>
        </div>
        <div className=" flex flex-col items-center gap-2">
          <div className=" loading w-full h-20"></div>
          <div className="line w-full h-px bg-lightBlue"></div>
          <div className="loading h-60 w-full mt-4"></div>
        </div>
      </div>
      <div className=" loading h-[600px]"></div>
    </div>
  );
}

export default InfoLoading;
