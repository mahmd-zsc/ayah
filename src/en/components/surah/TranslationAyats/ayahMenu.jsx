import { faBookOpen, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import TextMenu from "./textMenu";
import { useDispatch, useSelector } from "react-redux";
import {
  cahngeTaser,
  changeTaser,
} from "../../../../redux/settings/settingsActions";
import { setAyahId, setSurahId } from "../../../../redux/tafser/tafserAction";
function AyahMenu({ verse_key, ayaText, ayahNumber }) {
  let surahId = useSelector(
    (state) => state.surah.data.meta.filters.chapter_number
  );
  let tafser = useSelector((state) => state.tafser);

  console.log(tafser);

  let dispatch = useDispatch();
  let handleTafser = () => {
    dispatch(changeTaser(true));
    dispatch(setSurahId(+surahId));
    dispatch(setAyahId(ayahNumber));
    console.log();
  };
  return (
    <div className="flex justify-between md:flex-col items-center md:gap-7  md:w-10 h-10 md:h-40  text-gray-300">
      <div className=" flex gap-7   md:flex-col items-center flex-1  ">
        <p className=" hover:text-[#1f9386] cursor-pointer duration-300 text-sm">
          {verse_key}
        </p>
        <FontAwesomeIcon className="icon" icon={faPlay} />
        <FontAwesomeIcon
          onClick={handleTafser}
          className="icon"
          icon={faBookOpen}
        />
      </div>

      <TextMenu ayaText={ayaText} />
    </div>
  );
}

export default AyahMenu;
