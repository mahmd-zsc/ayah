import * as typeAction from "./settingsTypeActions";

const initialState = {
  menu: false,
  microphone: false,
  language: "en",
  tafser: false,
  settingMenu: false,
};

let SettingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case typeAction.CHANGE_MENU_MODE:
      return {
        ...state,
        menu: action.payload,
      };
    case typeAction.CHANGE_MICROPHONE_MODE:
      return {
        ...state,
        microphone: action.payload,
      };
    case typeAction.CHANGE_LANGUAGE:
      return {
        ...state,
        language: action.payload,
      };
    case typeAction.CHANGE_SETTING_MENU:
      return {
        ...state,
        settingMenu: action.payload,
      };
    case typeAction.OPEN_CLOSE_TAFSER:
      return {
        ...state,
        tafser: action.payload,
      };

    default:
      return state;
  }
};
export default SettingsReducer;
