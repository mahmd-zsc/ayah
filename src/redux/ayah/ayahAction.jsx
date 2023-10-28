import axios from "axios";
import * as typeAction from "./ayahTypeAction";

export let fetchAyah = (surah, ayah) => {
  return async (dispatch) => {
    dispatch({ type: typeAction.FETCH_AYAH_REQUEST });

    try {
      const response = await axios.get(
        `https://api.quran.com/api/v4/quran/verses/uthmani?chapter_number=${surah}&verse_key=${surah}:${ayah}`
      );
      dispatch({
        type: typeAction.FETCH_AYAH_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: typeAction.FETCH_AYAH_FAILURE,
        payload: error.message,
      });
    }
  };
};
