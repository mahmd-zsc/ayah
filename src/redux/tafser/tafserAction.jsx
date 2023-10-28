import axios from "axios";
import * as typeAction from "./tafserTypeAction";

// Note that this action creator now returns a function
export let fetchTafser = (authorId, surah, ayah) => {
  return async (dispatch) => {
    dispatch({ type: typeAction.FETCH_TAFSER_REQUEST });

    try {
      const response = await axios.get(
        // `http://api.quran-tafseer.com/tafseer/${authorId}/${surah}/${ayah}`
        `http://api.quran-tafseer.com/tafseer/1/${surah}/${ayah}`
      );
      dispatch({
        type: typeAction.FETCH_TAFSER_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: typeAction.FETCH_TAFSER_FAILURE,
        payload: error.message,
      });
    }
  };
};
export let setSurahId = (id) => {
  return {
    type: typeAction.SET_SURAH_ID,
    payload: id,
  };
};
export let setAyahId = (id) => {
  return {
    type: typeAction.SET_AYAH_ID,
    payload: id,
  };
};
