import * as typeAction from "./translationsTypeAction";

const initialState = {
  data: [],
  loading: true,
  error: null,
  authorId: 131,
};

let translationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case typeAction.FETCH_TRANSLATIONS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case typeAction.FETCH_TRANSLATIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case typeAction.FETCH_TRANSLATIONS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case typeAction.CHANGE_AUTHOR_ID:
      return {
        ...state,
        authorId: action.payload,
      };

    default:
      return state;
  }
};
export default translationsReducer;
