import axios from "axios";
import * as typeAction from "./SearchDataTypeAction";

export let fetchSearchData = (q, page) => {
  return async (dispatch) => {
    dispatch({ type: typeAction.FETCH_SEARCH_DATA_REQUEST });

    try {
      const response = await axios.get(
        `https://api.quran.com/api/v4/search?q=${q}&size=20&page=${page}&language=en`
      );
      dispatch({
        type: typeAction.FETCH_SEARCH_DATA_SUCCESS,
        payload: response.data.search,
      });
    } catch (error) {
      dispatch({
        type: typeAction.FETCH_SEARCH_DATA_FAILURE,
        payload: error.message,
      });
    }
  };
};
