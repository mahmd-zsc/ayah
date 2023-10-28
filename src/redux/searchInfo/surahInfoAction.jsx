import axios from "axios";
import * as typeAction from "./surahInfoTypeAction";

// Note that this action creator now returns a function
export let fetchSurahInfo = (id) => {
  return async (dispatch) => {
    dispatch({ type: typeAction.FETCH_SURAH_INFO_REQUEST });

    try {
      const response = await axios.get(
        `https://api.quran.com/api/v4/chapters/${id}/info?language=en`
      );
      dispatch({
        type: typeAction.FETCH_SURAH_INFO_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: typeAction.FETCH_SURAH_INFO_FAILURE,
        payload: error.message,
      });
    }
  };
};
