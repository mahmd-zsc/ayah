import patternTwo from "../../../images/Pattern 186-PhotoRoom.png-PhotoRoom.png";

import { useDispatch, useSelector } from "react-redux";

import BoxSurah from "./boxSurah";

function Artical() {
  const surahList = useSelector((state) => state.surahList);
  // console.log(surahList);



  return (
    <div className="relative bg-darkBlue">
      <div className=" container text-white pt-20">
        <h4 className="mb-2 font-bold text-lg">surah</h4>
        <div className="line w-full h-[2px] bg-mainBlue"></div>
      </div>
      <div className="container  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 z-20">
        {!surahList.loading ? (
          surahList.data.chapters.map((surah, index) => (
            <BoxSurah key={index} surah={surah} />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <div className=" container">
        <div className="lin w-full h-px mb-4 bg-mainBlue"></div>

      </div>
      <img
        className="absolute w-full h-full left-0 top-0 opacity-[0.50%] "
        src={patternTwo}
        alt=""
      />
    </div>
  );
}

export default Artical;
