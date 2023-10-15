import * as typeAction from "./suraListTypeAction";

const initialState = {
  data: [],
  loading: true,
  error: null,
};

let SuraListReducer = (state = initialState, action) => {
  switch (action.type) {
    case typeAction.FETCH_SURAH_LIST_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case typeAction.FETCH_SURAH_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case typeAction.FETCH_SURAH_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
export default SuraListReducer;
