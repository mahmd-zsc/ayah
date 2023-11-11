import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { setAyahId } from "../../../../../redux/tafserAyah/tafserAyahAction";

function TafserPagination() {
  let dispatch = useDispatch();
  let ayahsOfSurah = useSelector((state) => state.surah.data.verses.length);
  let ayaNumber = useSelector((state) => state.tafserAyah.ayahId);
  let [previous, setPrevious] = useState(true);
  let [next, setNext] = useState(true);
  let handleNext = () => {
    dispatch(setAyahId(ayaNumber + 1));
  };
  let handlePrevious = () => {
    dispatch(setAyahId(ayaNumber - 1));
  };
  useEffect(() => {
    if (ayaNumber < ayahsOfSurah) {
      setNext(false);
    } else {
      setNext(true);
    }
    if (ayaNumber > 1) {
      setPrevious(false);
    } else {
      setPrevious(true);
    }
  });
  return (
    <div className=" flex items-center justify-center gap-2 mt-8">
      <button
        onClick={handleNext}
        disabled={next}
        className="flex items-center gap-px sm:gap-1 px-1 sm:px-2 py-1 border border-gray-200 rounded-sm opacity-50 hover:opacity-100 duration-200 cursor-pointer disabled:cursor-not-allowed disabled:hover:opacity-20 capitalize disabled:opacity-30"
      >
        <FontAwesomeIcon icon={faArrowRight} />
        <span className=" text-sm sm:text-md">Next Ayah</span>
      </button>{" "}
      <button
        onClick={handlePrevious}
        disabled={previous}
        className=" flex items-center gap-px sm:gap-1 px-1 sm:px-2 py-1 border border-gray-200 rounded-sm opacity-50 hover:opacity-100 duration-200 cursor-pointer disabled:cursor-not-allowed disabled:hover:opacity-20 capitalize disabled:opacity-30"
      >
        <span className=" text-sm sm:text-md">previous Ayah</span>
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
    </div>
  );
}

export default TafserPagination;
