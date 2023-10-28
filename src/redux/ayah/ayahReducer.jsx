import * as typeAction from "./ayahTypeAction";

const initialState = {
  data: [],
  loading: true,
  error: null,
};

let ayahReducer = (state = initialState, action) => {
  switch (action.type) {
    case typeAction.FETCH_AYAH_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case typeAction.FETCH_AYAH_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case typeAction.FETCH_AYAH_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
export default ayahReducer;
