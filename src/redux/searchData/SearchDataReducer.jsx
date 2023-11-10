import * as typeAction from "./SearchDataTypeAction";

const initialState = {
  data: [],
  loading: true,
  error: null,
};

let SearchDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case typeAction.FETCH_SEARCH_DATA_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case typeAction.FETCH_SEARCH_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case typeAction.FETCH_SEARCH_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
export default SearchDataReducer;
