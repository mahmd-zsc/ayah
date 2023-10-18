import axios from "axios";
import * as typeAction from "./surahTitleTypeAction";

// Note that this action creator now returns a function
export let fetchSurahTitle = (id) => {
  return async (dispatch) => {
    dispatch({ type: typeAction.FETCH_SURAH_TITLE_REQUEST });

    try {
      const response = await axios.get(
        `https://api.quran.com/api/v4/chapters/${id}?language=en`
      );
      dispatch({
        type: typeAction.FETCH_SURAH_TITLE_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: typeAction.FETCH_SURAH_TITLE_FAILURE,
        payload: error.message,
      });
    }
  };
};
