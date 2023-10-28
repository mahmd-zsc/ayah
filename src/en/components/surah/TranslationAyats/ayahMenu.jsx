import { faBookOpen, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useCallback } from "react";
import TextMenu from "./textMenu";
import { useDispatch, useSelector } from "react-redux";
import { setAyahId, setSurahId } from "../../../../redux/tafser/tafserAction";
import { changeTaser } from "../../../../redux/settings/settingsActions";


function AyahMenu({ verse_key, ayaText, ayahNumber }) {
  let surahId = useSelector(
    (state) => state.surah.data.meta.filters.chapter_number
  );
  let dispatch = useDispatch();

  // Define the memoized callback function
  const handleTafser = useCallback(() => {
    dispatch(setSurahId(+surahId));
    dispatch(setAyahId(ayahNumber));
    dispatch(changeTaser(true));
  }, [surahId, ayahNumber, dispatch]);

  return (
    <div className="flex justify-between md:flex-col items-center md:gap-7  md:w-10 h-10 md:h-40  text-gray-300">
      <div className="flex gap-7 md:flex-col items-center flex-1">
        <p className="hover:text-[#1f9386] cursor-pointer duration-300 text-sm">
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
