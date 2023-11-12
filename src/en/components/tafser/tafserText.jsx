import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTafser } from "../../../redux/tafser/tafserAction";
import { franc } from "franc";
import pattern from "../../../images/Pattern 186-PhotoRoom.png-PhotoRoom.png";
function TafserText() {
  let dispatch = useDispatch();
  const surahId = window.location.search.split(":")[0].substring(1);
  const ayahId = window.location.search.split(":")[1];
  useEffect(() => {
    dispatch(fetchTafser(surahId, ayahId));
  }, []);

  let tafser = useSelector((state) => state.tafser);
  const ayah = useSelector((state) => state.ayah);

  console.log(tafser);

  return (
    <>
      {!ayah.loading &&
        ayah.data &&
        ayah.data.verses &&
        ayah.data.verses.length > 0 &&
        !tafser.loading &&
        tafser.data.length > 0 && (
          <div className=" flex flex-col gap-4 my-4">
            {tafser.data.map((t, index) => (
              <div className="relative  rounded-lg overflow-hidden bg-mainBlue">
                <div
                  dir={franc(t.text) !== `arb` ? "ltr" : "rtl"}
                  key={index}
                  className=" relative z-20    flex flex-col py-4 px-6 gap-4 "
                >
                  <p className=" text-mainRed text-lg">{t.tafseer_name}</p>
                  <p>{t.text}</p>
                </div>{" "}
                <img
                  className=" absolute top-0 left-0 opacity-[0.50%]"
                  src={pattern}
                  alt=""
                />
              </div>
            ))}
            <div className="line h-px bg-lightBlue  "></div>
          </div>
        )}
      {tafser.loading && (
        <div className="flex flex-col gap-4 my-4">
          <div className=" loading rounded-lg h-20"></div>
          <div className=" loading rounded-lg h-40"></div>
          <div className=" loading rounded-lg h-60"></div>
          <div className=" loading rounded-lg h-80"></div>
        </div>
      )}
    </>
  );
}

export default TafserText;
