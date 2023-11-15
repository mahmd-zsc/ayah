import { combineReducers } from "redux";
import SuraListReducer from "./suraList/suraListReducer";
import SettingsReducer from "./settings/settingsReducer";
import SuraSearchReducer from "./surahSearch/suraSearchReducer";
import SurahTitleReducer from "./surahTitle/surahTitleReducer";
import translationsReducer from "./translations/translationsReducer";
import RecentlyReadReducer from "./RecentlyRead/RecentlyReadReducer";
import ayahReducer from "./ayah/ayahReducer";
import SurahReducer from "./surah/surahReducer";
import SearchDataReducer from "./searchData/SearchDataReducer";
import TafserAyahReducer from "./tafserAyah/tafserAyahReducer";
import TafserReducer from "./tafser/tafserReducer";
import SurahInfoReducer from "./searchInfo/surahInfoReducer";
import audioReducer from "./audio/audioReducer";

// Import other reducers as needed

const rootReducer = combineReducers({
  surahList: SuraListReducer,
  surah: SurahReducer,
  surahTitle: SurahTitleReducer,
  surahInfo: SurahInfoReducer,
  settings: SettingsReducer,
  surahSearch: SuraSearchReducer,
  searchData: SearchDataReducer,
  translations: translationsReducer,
  recently: RecentlyReadReducer,
  tafserAyah: TafserAyahReducer,
  ayah: ayahReducer,
  tafser: TafserReducer,
  audio: audioReducer,
});

export default rootReducer;
