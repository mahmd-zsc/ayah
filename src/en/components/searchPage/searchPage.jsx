import React from "react";
import { useSelector } from "react-redux";
import SearchBar from "./search/searchBar";
import SearchAyah from "./searchAyah";

function SearchPage() {
  let search = useSelector((state) => state.surahSearch);
  // console.log(search);

  return (
    <div className="min-h-screen bg-darkBlue">
      <div className="container">
        <SearchBar />
        {search.searchData && !search.loading && (
          <>
            <p className="text-sm text-gray-400">
              <span className="text-mainRed">
                {search.searchData.total_results}
              </span>{" "}
              Search Results
            </p>
            <div className="bg-mainBlue grid grid-cols-1 gap-px">
              {search.searchData.results &&
                search.searchData.results.map((d) => (
                  <SearchAyah data={d} key={d.id} />
                ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default SearchPage;
