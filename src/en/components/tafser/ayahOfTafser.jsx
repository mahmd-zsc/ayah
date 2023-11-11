import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAyah } from "../../../redux/ayah/ayahAction";

function AyahOfTafser() {
  let surahId = window.location.search.split(":")[0].substring(1);
  let ayahId = window.location.search.split(":")[1];
  let ayah = useSelector((state) => state.ayah);
  let dispatch = useDispatch();
  console.log(ayah);
  useEffect(() => {
    dispatch(fetchAyah(surahId, ayahId));
  }, []);

  return (
    !ayah.loading &&
    ayah.data.verses.length > 0 && (
      <div>
        <p>{ayah.data.verses[0].text_uthmani}</p>
      </div>
    )
  );
}

export default AyahOfTafser;
