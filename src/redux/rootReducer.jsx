import { combineReducers } from "redux";
import SuraListReducer from "./suraList/suraListReducer";
import SettingsReducer from "./settings/settingsReducer";
import SuraSearchReducer from "./surahSearch/suraSearchReducer";
import SurahReducer from "./search/surahReducer";
import SurahInfoReducer from "./searchInfo copy/surahInfoReducer";
import SurahTitleReducer from "./surahTitle/surahTitleReducer";

// Import other reducers as needed

const rootReducer = combineReducers({
  surahList: SuraListReducer,
  surah: SurahReducer,
  surahTitle: SurahTitleReducer,
  surahInfo: SurahInfoReducer,
  settings: SettingsReducer,
  surahSearch: SuraSearchReducer,
});

export default rootReducer;
