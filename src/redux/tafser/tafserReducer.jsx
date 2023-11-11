import * as typeAction from "./tafserTypeAction";

const initialState = {
  data: [],
  loading: true,
  error: null,
  // ayahId: null,
  // surahId: null,
  // author: 1,
};

let TafserReducer = (state = initialState, action) => {
  switch (action.type) {
    case typeAction.FETCH_TAFSER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case typeAction.FETCH_TAFSER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case typeAction.FETCH_TAFSER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    // case typeAction.SET_AYAH_ID:
    //   return {
    //     ...state,
    //     ayahId: action.payload,
    //   };
    // case typeAction.SET_SURAH_ID:
    //   return {
    //     ...state,
    //     surahId: action.payload,
    //   };

    default:
      return state;
  }
};
export default TafserReducer;
