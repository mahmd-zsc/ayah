import axios from "axios";
import * as typeAction from "./RecentlyReadTypeAction";

// Note that this action creator now returns a function
export let addRecentlySurah = (data) => {
  return {
    type: typeAction.ADD_RECENTLY_SURAH,
    payload: data,
  };
};
