import React, { useEffect } from "react";

import Artical from "./artical/artical";
import pattern from "../../images/pattern.png";
import patternTwo from "../../images/Pattern 186-PhotoRoom.png-PhotoRoom.png";
import Landing from "./landing/landing";
import { useDispatch, useSelector } from "react-redux";
import {
  changeMenuMode,
  changeTaser,
} from "../../redux/settings/settingsActions";
import { fetchSurahList } from "../../redux/suraList/suraListAction";
import LoadingOfHome from "./loadingOfHome";

function Home() {
  let surahList = useSelector((state) => state.surahList);
  let dispatch = useDispatch();
  useEffect(() => {
    document.body.style.overflow = "auto";
    dispatch(changeMenuMode(false));
    dispatch(changeTaser(false));
    dispatch(fetchSurahList());
  }, []);

  return (
    <>
      {!surahList.loading &&
        surahList.data &&
        surahList.data.chapters &&
        surahList.data.chapters.length > 0 && (
          <div className=" relative min-h-screen">
            <Landing />
            <div className=" h-16 w-full relative overflow-hidden bg-darkBlue z-10">
              <img
                className="  absolute left-0 h-[600%] top-1/2 w-full  -translate-y-1/2 opacity-20 "
                src={patternTwo}
                alt=""
              />
            </div>
            <Artical />
          </div>
        )}
      {surahList.loading && <LoadingOfHome />}
    </>
  );
}

export default Home;
