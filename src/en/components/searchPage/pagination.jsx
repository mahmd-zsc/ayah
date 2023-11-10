import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchSearchData } from "../../../redux/searchData/SearchDataAction";

function Pagination() {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  let decodedText = decodeURIComponent(window.location.search.split("=")[2]);
  const searchData = useSelector((state) => state.searchData.data);
  // console.log(searchData);
  let [current, setCurrent] = useState(searchData.current_page);
  let [count, setCount] = useState(5);
  let [end, setEnd] = useState(current * count);

  let [start, setStart] = useState(end - count);
  const numbersArray = Array.from(
    { length: +searchData.total_pages },
    (_, index) => index + 1
  )
  let handlePage = (n) => {
    let text = window.location.search;

    let match = text.match(/page=(\d+)/);

    if (match) {
      let pageNumber = match[1];

      let newText = text.replace(/page=\d+/, `page=${n}`);

      navigate(newText);
      dispatch(fetchSearchData(decodedText, n));
      window.scrollTo({
        top: 0,
      });
    }
  };

  // console.log("start is " + start);
  // console.log("end is " + end);
  useEffect(() => {
    let allPaginationItem = document.querySelectorAll(".PaginationItem");
    allPaginationItem = Array.from(allPaginationItem); // Convert NodeList to array
    if (allPaginationItem) {
      allPaginationItem.forEach((i) => {
        i.classList.remove("active");
      });
    }

    let activeElement = document.getElementById(searchData.current_page);
    if (activeElement) {
      activeElement.classList.add("active");
    }
    // console.log(activeElement);
  }, [searchData.current_page]);

  return (
    <div className=" Pagination py-10 flex items-center justify-center gap-3">
      <FontAwesomeIcon
        className=" text-2xl text-gray-500 hover:text-white px-3 py-1 hover:bg-mainBlue rounded-md"
        icon={faCaretLeft}
      />

      {numbersArray.map((n, index) => (
        <div
          id={n}
          onClick={() => handlePage(n)}
          key={index}
          className="PaginationItem text-xl text-gray-500 hover:text-white px-1 min-w-8 h-8 flex justify-center items-center  hover:bg-mainBlue rounded-md cursor-pointer "
        >
          {n}
        </div>
      ))}
      <FontAwesomeIcon
        className=" text-2xl text-gray-500 hover:text-white px-3 py-1 hover:bg-mainBlue rounded-md"
        icon={faCaretRight}
      />
    </div>
  );
}

export default Pagination;
