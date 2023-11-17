import * as typeAction from "./translationsNamesTypeAction";

const initialState = {
  data: [],
  loading: true,
  error: null,
};

let translationsNamesReducer = (state = initialState, action) => {
  switch (action.type) {
    case typeAction.FETCH_TRANSLATIONS_NAMES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case typeAction.FETCH_TRANSLATIONS_NAMES_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case typeAction.FETCH_TRANSLATIONS_NAMES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
export default translationsNamesReducer;
