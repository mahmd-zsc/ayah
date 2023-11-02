import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
// import {
//   changePage,
//   playNowFetchData,
// } from "../redux/playNow/playAction";

function Pagination() {
  const dispatch = useDispatch();
  const surahSearch = useSelector((state) => state.surahSearch);
  const total_pages = useSelector(
    (state) => state.surahSearch.searchData.total_pages
  );
  console.log("total_pages = " + total_pages);
  // console.log(surahSearch);
  // let [start, setStart] = useState(
  //   +surahSearch.page < 3 ? 1 : +surahSearch.page - 4
  // );
  // console.log("start = " + start);
  // const numbersArray = Array.from(
  //   { length: selector.page + 6 },
  //   (_, index) => index + 1
  // );
  // console.log(start);

  // let [end, setEnd] = useState(start + 5);
  let [next, setNext] = useState(true);
  let [previous, setPrevious] = useState(true);
  const numbersArray = Array.from(
    { length: +total_pages + 1 },
    (_, index) => index + 1
  );
  let handleNext = () => {
    // if (next) {
    //   dispatch(changePage(selector.page + 1));
    //   dispatch(playNowFetchData(selector.page));
    // }
  };
  let handlePrevious = () => {
    // if (previous) {
    //   dispatch(changePage(selector.page - 1));
    //   dispatch(playNowFetchData(selector.page));
    // }
  };
  let hadleNubmer = (num) => {
    // dispatch(changePage(num));
  };
  //   useEffect(() => {
  //     const active = document.querySelector(`#number_${selector.page}`);
  //     active?.classList.add("active");
  //   }, [selector.page]);
  //   useEffect(() => {
  //     if (selector.page === 1) {
  //       setPrevious(false);
  //     }
  //   }, []);

  return (
    <div className=" py-10 flex items-center justify-center gap-1">
      <FontAwesomeIcon
        className=" text-2xl text-gray-500 hover:text-white px-3 py-px hover:bg-mainBlue rounded-md"
        icon={faCaretLeft}
      />

      {numbersArray.map((n, index) => (
        <div
          key={index}
          className="text-xl text-gray-500 hover:text-white px-3 py-1 hover:bg-mainBlue rounded-md"
        >
          {n + 1}
        </div>
      ))}
      <FontAwesomeIcon
        className=" text-2xl text-gray-500 hover:text-white px-3 py-1 hover:bg-mainBlue rounded-md"
        icon={faCaretRight}
      />
      {/* <FontAwesomeIcon className=" text-4xl" icon={faCaretRight}    /> */}
    </div>
  );
}

export default Pagination;
