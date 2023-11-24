import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchSearchData } from "../../redux/searchData/SearchDataAction";

function Pagination() {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  let decodedText = decodeURIComponent(window.location.search.split("=")[2]);
  const searchData = useSelector((state) => state.searchData.data);
  let [next, setNext] = useState(true);
  let [previous, setPrevious] = useState(true);
  let [start, setStart] = useState(
    searchData.current_page < 4 ? 0 : searchData.current_page - 4
  );
  let [end, setEnd] = useState(
    searchData.current_page < 4
      ? searchData.current_page + 3
      : searchData.current_page + 2
  );
  const numbersArray = Array.from(
    { length: searchData.total_pages },
    (_, index) => index + 1
  );
  let handlePage = (n) => {
    if (n !== searchData.current_page) {
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
    }
  };
  useEffect(() => {
    setStart(searchData.current_page < 4 ? 0 : searchData.current_page - 4);
    setEnd(
      searchData.current_page < 4
        ? searchData.current_page + 3
        : searchData.current_page + 2
    );
  }, [searchData.current_page]);
  let handleNext = () => {
    if (next) {
      handlePage(searchData.current_page + 1);
    }
  };
  let handlePrevious = () => {
    if (previous) {
      handlePage(searchData.current_page - 1);
    }
  };
  useEffect(() => {
    console.log(searchData.current_page);
    if (searchData.current_page === 1) {
      setPrevious(false);
    } else {
      setPrevious(true);
    }
    if (searchData.current_page === searchData.total_pages) {
      setNext(false);
    } else {
      setNext(true);
    }
  }, [searchData.current_page]);
  return (
    <div className=" Pagination py-10 flex items-center justify-center gap-1">
      <FontAwesomeIcon
        onClick={handlePrevious}
        className={` text-2xl text-gray-500 hover:text-white px-3 py-1 hover:bg-mainBlue rounded-md cursor-pointer ${
          !previous ? "disabled" : null
        }`}
        icon={faCaretLeft}
      />

      {numbersArray.slice(start, end).map((n, index) => (
        <div
          id={n}
          onClick={() => handlePage(n)}
          key={index}
          className={`${
            n === searchData.current_page ? "active" : ""
          } PaginationItem text-xl text-gray-500 hover:text-white px-3 min-w-8 h-8 flex justify-center items-center  hover:bg-mainBlue rounded-md cursor-pointer  `}
        >
          {n}
        </div>
      ))}
      <FontAwesomeIcon
        onClick={handleNext}
        className={` text-2xl text-gray-500 hover:text-white px-3 py-1 hover:bg-mainBlue rounded-md cursor-pointer ${
          !next ? "disabled" : null
        }`}
        icon={faCaretRight}
      />
    </div>
  );
}

export default Pagination;
