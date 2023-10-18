import axios from "axios";
import * as typeAction from "./surahTypeAction";

// Note that this action creator now returns a function
export let fetchSurah = (id) => {
  return async (dispatch) => {
    dispatch({ type: typeAction.FETCH_SURAH_REQUEST });

    try {
      const response = await axios.get(
        `https://api.quran.com/api/v4/quran/verses/uthmani?chapter_number=${id}`
      );
      dispatch({
        type: typeAction.FETCH_SURAH_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: typeAction.FETCH_SURAH_FAILURE,
        payload: error.message,
      });
    }
  };
};
