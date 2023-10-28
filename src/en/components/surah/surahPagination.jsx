import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function SurahPagination() {
  let id = useParams().surahId;
  let navigate = useNavigate();
  let [previous, setPrevious] = useState(true);
  let [next, setNext] = useState(true);

  useEffect(() => {
    if (id < 114) {
      setNext(false);
    } else {
      setNext(true);
    }
    if (id > 1) {
      setPrevious(false);
    } else {
      setPrevious(true);
    }
  });
  return (
    <div className=" flex items-center justify-center gap-2 mt-8">
      <Link to={`/${+id - 1}`}>
        <button
          disabled={previous}
          className=" flex items-center gap-1 px-2 py-1 border border-gray-200 rounded-sm opacity-50 hover:opacity-100 duration-200 cursor-pointer disabled:cursor-not-allowed disabled:hover:opacity-20 capitalize disabled:opacity-30"
        >
          <FontAwesomeIcon icon={faArrowLeft} />
          <span>previous surah</span>
        </button>
      </Link>
      <Link to={`/${+id + 1}`}>
        <button
          disabled={next}
          className="flex items-center gap-1 px-2 py-1 border border-gray-200 rounded-sm opacity-50 hover:opacity-100 duration-200 cursor-pointer disabled:cursor-not-allowed disabled:hover:opacity-20 capitalize disabled:opacity-30"
        >
          <span>Next Surah</span>
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </Link>
    </div>
  );
}

export default SurahPagination;
