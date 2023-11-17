import axios from "axios";
import * as typeAction from "./translationsTypeAction";

// Note that this action creator now returns a function
export let fetchTranslations = (authorId, surahId) => {
  return async (dispatch) => {
    dispatch({ type: typeAction.FETCH_TRANSLATIONS_REQUEST });

    try {
      const response = await axios.get(
        `https://api.quran.com/api/v4/quran/translations/${authorId}?chapter_number=${surahId}`
      );
      dispatch({
        type: typeAction.FETCH_TRANSLATIONS_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: typeAction.FETCH_TRANSLATIONS_FAILURE,
        payload: error.message,
      });
    }
  };
};
export let changeAuthorId = (id) => {
  return {
    type: typeAction.CHANGE_AUTHOR_ID,
    payload: id,
  };
};
