import axios from "axios";
import * as typeAction from "./suraListTypeAction";

// Note that this action creator now returns a function
export let fetchSurahList = () => {
  return async (dispatch) => {
    dispatch({ type: typeAction.FETCH_SURAH_LIST_REQUEST });

    try {
      const response = await axios.get(`https://api.quran.com/api/v4/chapters`);
      dispatch({
        type: typeAction.FETCH_SURAH_LIST_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: typeAction.FETCH_SURAH_LIST_FAILURE,
        payload: error.message,
      });
    }
  };
};
