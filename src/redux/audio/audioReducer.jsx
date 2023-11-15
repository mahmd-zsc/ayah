import * as typeAction from "./audioTypeAction";

const initialState = {
  data: [],
  loading: true,
  error: null,
};

let audioReducer = (state = initialState, action) => {
  switch (action.type) {
    case typeAction.FETCH_AUDIO_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case typeAction.FETCH_AUDIO_SUCCESS:
      return {
        ...state,
        loading: false,
        data: [action.payload],
      };
    case typeAction.FETCH_AUDIO_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case typeAction.DELETE_DATA:
      return {
        ...state,
        data: [],
      };

    default:
      return state;
  }
};
export default audioReducer;
