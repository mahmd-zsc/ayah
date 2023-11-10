import axios from "axios";
import * as typeAction from "./surahSearchTypeAction";

export let fetchSurahSearch = (q) => {
  return async (dispatch) => {
    dispatch({ type: typeAction.FETCH_SURAH_SEARCH_REQUEST });

    try {
      const response = await axios.get(
        `https://api.quran.com/api/v4/search?q=${q}&size=20&&language=en`
      );
      dispatch({
        type: typeAction.FETCH_SURAH_SEARCH_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: typeAction.FETCH_SURAH_SEARCH_FAILURE,
        payload: error.message,
      });
    }
  };
};

export let setTextOfSearch = (text) => {
  return {
    type: typeAction.SET_TEXT_OF_SEARCH,
    payload: text,
  };
};

export let changeSearchMenuOpen = (open) => {
  return {
    type: typeAction.CHANGE_SEARCH_MENU_OPEN,
    payload: open,
  };
};

export let changeSearchPage = (pageNumber) => {
  return {
    type: typeAction.CHANGE_SEARCH_PAGE,
    payload: pageNumber,
  };
};
