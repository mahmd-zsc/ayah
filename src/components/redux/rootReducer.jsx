import { combineReducers } from "redux";
import SuraListReducer from "./suraList/suraListReducer";
import SettingsReducer from "./settings/settingsReducer";
import SuraSearchReducer from "./surahSearch/suraSearchReducer";

// Import other reducers as needed

const rootReducer = combineReducers({
  surahList: SuraListReducer,
  settings: SettingsReducer,
  surahSearch: SuraSearchReducer,
});

export default rootReducer;
