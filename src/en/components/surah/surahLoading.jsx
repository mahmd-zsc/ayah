import React from "react";

function SurahLoading() {
  return (
    <div className=" container min-h-screen  flex flex-col">
      <div className=" loading w-60 h-20 mx-auto mt-14 mb-10"></div>
      <div className=" loading w-48 h-20 mx-auto "></div>
      <div className=" flex sm:items-center justify-between gap-4 flex-col sm:flex-row mt-32">
        <div className=" loading sm:w-96 w-40 h-8  "></div>
        <div className=" loading w-24 h-8 rounded-lg  "></div>
      </div>

      <div className=" loading w-24 h-8 ml-auto mt-2 rounded-lg mb-20 relative bottom-10 sm:bottom-0   "></div>

      <div className=" flex flex-col gap-1 bg-darkBlue mb-10">
        {Array.from({ length: 6 }, (_, index) => index).map((i) => (
          <div className=" loading h-[300px] bg-mainBlue"></div>
        ))}
      </div>
    </div>
  );
}

export default SurahLoading;
