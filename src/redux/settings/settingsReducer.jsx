import * as typeAction from "./settingsTypeActions";

const initialState = {
  menu: false,
  microphone: false,
  language: "en",
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

    default:
      return state;
  }
};
export default SettingsReducer;
