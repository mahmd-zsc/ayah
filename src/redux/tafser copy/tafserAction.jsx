import axios from "axios";
import * as typeAction from "./tafserTypeAction";

// Note that this action creator now returns a function
export let fetchTafser = (surah, ayah) => {
  let ids = Array.from({ length: 13 }, (_, index) => index + 1);
  let data = [];
  return async (dispatch) => {
    dispatch({ type: typeAction.FETCH_TAFSER_REQUEST });

    try {
      // Use Promise.all to wait for all asynchronous requests to complete
      await Promise.all(
        ids.map(async (m) => {
          const response = await axios.get(
            `http://api.quran-tafseer.com/tafseer/${m}/${surah}/${ayah}`
          );
          data.push(response.data);
          // data.pop(response.data)
        })
      );

      dispatch({
        type: typeAction.FETCH_TAFSER_SUCCESS,
        payload: data,
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
