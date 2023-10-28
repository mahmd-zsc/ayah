import * as typeAction from "./surahInfoTypeAction";

const initialState = {
  data: [],
  loading: true,
  error: null,
};

let SurahInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case typeAction.FETCH_SURAH_INFO_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case typeAction.FETCH_SURAH_INFO_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case typeAction.FETCH_SURAH_INFO_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
export default SurahInfoReducer;
