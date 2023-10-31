import { combineReducers } from "redux";
import SuraListReducer from "./suraList/suraListReducer";
import SettingsReducer from "./settings/settingsReducer";
import SuraSearchReducer from "./surahSearch/suraSearchReducer";
import SurahTitleReducer from "./surahTitle/surahTitleReducer";
import translationsReducer from "./translations/translationsReducer";
import RecentlyReadReducer from "./RecentlyRead/RecentlyReadReducer";
import TafserReducer from "./tafser/tafserReducer";
import ayahReducer from "./ayah/ayahReducer";
import SurahReducer from "./surah/surahReducer";

// Import other reducers as needed

const rootReducer = combineReducers({
  surahList: SuraListReducer,
  surah: SurahReducer,
  surahTitle: SurahTitleReducer,
  // surahInfo: SurahInfoReducer,
  settings: SettingsReducer,
  surahSearch: SuraSearchReducer,
  translations: translationsReducer,
  recently: RecentlyReadReducer,
  tafser: TafserReducer,
  ayah: ayahReducer,
});

export default rootReducer;
