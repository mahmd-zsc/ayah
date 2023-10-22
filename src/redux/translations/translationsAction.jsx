import axios from "axios";
import * as typeAction from "./translationsTypeAction";

// Note that this action creator now returns a function
export let fetchTranslations = (id) => {
  return async (dispatch) => {
    dispatch({ type: typeAction.FETCH_TRANSLATIONS_REQUEST });

    try {
      const response = await axios.get(
        `https://api.quran.com/api/v4/quran/translations/131?chapter_number=${id}`
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
