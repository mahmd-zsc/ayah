import React from "react";
let surah = ["yaseen", "al kahf", "hud", "yusuf"];
function Research() {
  return (
    <div className=" research flex items-center justify-center gap-1 lg:gap-4 mt-10">
      {surah.map((s, index) => (
        <div
          key={index}
          className=" capitalize relative bg-mainBlue px-6 py-2 rounded-full cursor-pointer shadow-sm hover:shadow-black duration-300 hover:-translate-y-1 opacity-70 hover:opacity-100  "
        >
          {s}
        </div>
      ))}
    </div>
  );
}

export default Research;
