import axios from "axios";
import * as typeAction from "./translationsNamesTypeAction";

// Note that this action creator now returns a function
export let fetchTranslationsNames = () => {
  return async (dispatch) => {
    dispatch({ type: typeAction.FETCH_TRANSLATIONS_NAMES_REQUEST });

    try {
      const response = await axios.get(
        `https://api.quran.com/api/v4/resources/translations`
      );
      dispatch({
        type: typeAction.FETCH_TRANSLATIONS_NAMES_SUCCESS,
        payload: response.data.translations,
      });
    } catch (error) {
      dispatch({
        type: typeAction.FETCH_TRANSLATIONS_NAMES_FAILURE,
        payload: error.message,
      });
    }
  };
};
