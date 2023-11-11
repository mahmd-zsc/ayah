import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function EmptySearch() {
  let decodedText = decodeURIComponent(window.location.search.split("=")[2]);

  return (
    <div className=" flex flex-col gap-10 justify-center mt-10 text-gray-200">
      <FontAwesomeIcon
        className=" text-5xl text-mainBlue"
        icon={faMagnifyingGlass}
      />
      <div className=" flex flex-col gap-2 justify-center text-center ">
        <p>No results found</p>
        <p>
          {` We could not find any matching search results for "${decodedText}". try
          searching for a different keyword.`}
        </p>
      </div>
    </div>
  );
}

export default EmptySearch;
