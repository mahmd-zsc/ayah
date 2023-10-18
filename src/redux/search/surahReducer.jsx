import * as typeAction from "./surahTypeAction";

const initialState = {
  data: [],
  loading: true,
  error: null,
};

let SurahReducer = (state = initialState, action) => {
  switch (action.type) {
    case typeAction.FETCH_SURAH_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case typeAction.FETCH_SURAH_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case typeAction.FETCH_SURAH_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
export default SurahReducer;
