import * as typeAction from "./settingsTypeActions";

const initialState = {
  menu: false,
  microphone: false,
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

    default:
      return state;
  }
};
export default SettingsReducer;
