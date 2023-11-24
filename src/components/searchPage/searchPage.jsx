import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchBar from "./search/searchBar";
import SearchAyah from "./searchAyah";
import Pagination from "./pagination";
import { fetchSearchData } from "./../../redux/searchData/SearchDataAction";
import LoadingSearch from "./loadingSearch";
import EmptySearch from "./emptySearch";

function SearchPage() {
  let dispatch = useDispatch();

  let surahSearch = useSelector((state) => state.surahSearch);
  let searchData = useSelector((state) => state.searchData);
  let decodedText = decodeURIComponent(window.location.search.split("=")[2]);
  let page = decodeURIComponent(
    window.location.search.split("page=")[1]?.match(/\d+/)[0]
  );

  useEffect(() => {
    dispatch(fetchSearchData(decodedText, page));
  }, []);
  return (
    <div className=" bg-darkBlue">
      <div className="container">
        <>
          <SearchBar />
          {!searchData.loading &&
            searchData &&
            searchData.data &&
            searchData.data.results &&
            searchData.data.results.length > 0 && (
              <>
                <p className="text-sm text-gray-400">
                  <span className="text-mainRed">
                    {searchData.data.total_results}
                  </span>
                  <span> Search Results</span>
                </p>
                <div className="bg-mainBlue grid grid-cols-1 gap-px pb-px ">
                  {surahSearch.data.search.results &&
                    searchData.data.results.map((d) => (
                      <SearchAyah data={d} key={d.id} />
                    ))}
                </div>
                <Pagination />
              </>
            )}

          {searchData.loading && <LoadingSearch />}
          {!searchData.loading &&
            searchData &&
            searchData.data &&
            searchData.data.results &&
            searchData.data.results.length === 0 && <EmptySearch />}
        </>
      </div>
    </div>
  );
}

export default SearchPage;
