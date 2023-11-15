import axios from "axios";
import * as typeAction from "./audioTypeAction";

export let fetchAudio = (recitation_id, surahId) => {
  return async (dispatch) => {
    dispatch({ type: typeAction.FETCH_AUDIO_REQUEST });

    try {
      const response = await axios.get(
        `https://api.quran.com/api/v4/chapter_recitations/${recitation_id}/${surahId}`
      );
      dispatch({
        type: typeAction.FETCH_AUDIO_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: typeAction.FETCH_AUDIO_FAILURE,
        payload: error.message,
      });
    }
  };
};
export let deleteData = () => {
  return {
    type: typeAction.DELETE_DATA,
  };
};
