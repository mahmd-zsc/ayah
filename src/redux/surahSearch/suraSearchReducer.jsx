import * as typeAction from "./surahSearchTypeAction";

const initialState = {
  data: [],
  loading: true,
  error: null,
  text: "",
  open: false,
  page: 1,
  searchData: [],
};

let SuraSearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case typeAction.FETCH_SURAH_SEARCH_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case typeAction.FETCH_SURAH_SEARCH_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case typeAction.FETCH_SURAH_SEARCH_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case typeAction.SET_TEXT_OF_SEARCH:
      return {
        ...state,
        text: action.payload,
      };
    case typeAction.CHANGE_SEARCH_MENU_OPEN:
      return {
        ...state,
        open: action.payload,
      };
    case typeAction.CHANGE_SEARCH_PAGE:
      return {
        ...state,
        page: action.payload,
      };
    case typeAction.SET_SEARCH_DATA:
      return {
        ...state,
        searchData: action.payload,
      };

    default:
      return state;
  }
};
export default SuraSearchReducer;
