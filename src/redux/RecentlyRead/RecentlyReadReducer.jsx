import * as typeAction from "./RecentlyReadTypeAction";

const initialState = {
  data: [],
};

let RecentlyReadReducer = (state = initialState, action) => {
  switch (action.type) {
    case typeAction.ADD_RECENTLY_SURAH:
      return {
        data: [
          ...state.data.filter((d) => d.chapterId !== +action.payload),
          { chapterId: +action.payload, aya: 1 },
        ],
      };

    default:
      return state;
  }
};
export default RecentlyReadReducer;
