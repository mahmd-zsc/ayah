import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchAyah } from "../../redux/ayah/ayahAction";
import { fetchTafser } from "../../redux/tafser/tafserAction";

function OptionOfTafser() {
  let surahId = window.location.search.split(":")[0].substring(1);
  let ayahId = window.location.search.split(":")[1];
  let dispatch = useDispatch();
  //   console.log(surahId, ayahId);

  let navigate = useNavigate();
  const [selectedSurahId, setSelectedSurahId] = useState(surahId | 1);
  const [selectedAyahId, setSelectedAyahId] = useState(ayahId | 1);

  const tafser = useSelector((state) => state.tafser);
  const surahList = useSelector((state) => state.surahList);

  const handleSurahChange = (e) => {
    setSelectedSurahId(+e.target.value);
    setSelectedAyahId(1);
  };
  const handleAyahChange = (e) => {
    setSelectedAyahId(+e.target.value);
  };
  let handleBrowse = () => {
    if (+selectedSurahId !== +surahId || +selectedAyahId !== +ayahId) {
      navigate(`/tafser?${selectedSurahId}:${selectedAyahId}`);
      dispatch(fetchAyah(selectedSurahId, selectedAyahId));
      dispatch(fetchTafser(selectedSurahId, selectedAyahId));
    }
  };

  return (
    <>
      {!surahList.loading && (
        <div className="flex flex-col sm:flex-row items-center justify-center  gap-8 sm:gap-4 ">
          <div className="flex items-center gap-6 w-full sm:w-auto ">
            <p className="capitalize text-mainRed">Surah :</p>
            <select
              className=" flex-1  md:w-60 outline-none"
              name=""
              id=""
              value={selectedSurahId}
              onChange={handleSurahChange}
            >
              {surahList.data.chapters.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.name_simple}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center gap-6  w-full sm:w-auto ">
            <p className="capitalize text-mainRed">Ayah :</p>
            <select
              onChange={handleAyahChange}
              value={selectedAyahId}
              className="flex-1 outline-none"
              name=""
              id=""
            >
              {Array.from(
                {
                  length:
                    surahList.data &&
                    surahList.data.chapters[selectedSurahId - 1] &&
                    surahList.data.chapters[selectedSurahId - 1].verses_count,
                },
                (_, index) => index + 1
              ).map((verse) => (
                <option key={verse} value={verse}>
                  {verse}
                </option>
              ))}
            </select>
          </div>
          <button
            onClick={handleBrowse}
            className=" bg-mainRed px-2 py-1 rounded-md"
          >
            browse
          </button>
        </div>
      )}
      {surahList.loading && (
        <div className="flex flex-col sm:flex-row items-center justify-center  gap-8 sm:gap-4 ">
          <div className=" flex items-center gap-6 w-full sm:w-auto">
            <div className="loading w-14 h-6"></div>
            <div className="loading flex-1  md:w-60 h-6"></div>
          </div>
          <div className=" flex items-center gap-6 w-full sm:w-auto">
            <div className="loading w-12 h-6"></div>
            <div className="loading flex-1 w-8 h-6"></div>
          </div>

          <div className="loading w-20 h-8 rounded-lg"></div>
        </div>
      )}
    </>
  );
}

export default OptionOfTafser;
