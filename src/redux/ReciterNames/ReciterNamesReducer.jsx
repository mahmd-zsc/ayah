import * as typeAction from "./ReciterNamesTypeAction";

const initialState = {
  data: [],
  loading: true,
  error: null,
};

let ReciterNamesReducer = (state = initialState, action) => {
  switch (action.type) {
    case typeAction.FETCH_RECITER_NAMES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case typeAction.FETCH_RECITER_NAMES_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case typeAction.FETCH_RECITER_NAMES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
export default ReciterNamesReducer;
