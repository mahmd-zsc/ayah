import axios from "axios";
import * as typeAction from "./ReciterNamesTypeAction";

// Note that this action creator now returns a function
export let fetchReciterNames = () => {
  return async (dispatch) => {
    dispatch({ type: typeAction.FETCH_RECITER_NAMES_REQUEST });

    try {
      const response = await axios.get(
        `https://api.quran.com/api/v4/resources/recitations?language=en`
      );
      dispatch({
        type: typeAction.FETCH_RECITER_NAMES_SUCCESS,
        payload: response.data.recitations,
      });
    } catch (error) {
      dispatch({
        type: typeAction.FETCH_RECITER_NAMES_FAILURE,
        payload: error.message,
      });
    }
  };
};
