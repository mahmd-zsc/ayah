import * as typeAction from "./audioTypeAction";

const initialState = {
  data: [],
  loading: true,
  error: null,
  ReciterId: 7,
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
    case typeAction.CHANGE_RECITER_ID:
      return {
        ...state,
        ReciterId: action.payload,
      };

    default:
      return state;
  }
};
export default audioReducer;
