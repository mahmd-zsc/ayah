import * as typeAction from "./settingsTypeActions";

export let changeMenuMode = (action) => {
  return {
    type: typeAction.CHANGE_MENU_MODE,
    payload: action,
  };
};
export let changeMicrophoneMode = (action) => {
  return {
    type: typeAction.CHANGE_MICROPHONE_MODE,
    payload: action,
  };
};
export let changeLanguage = (action) => {
  return {
    type: typeAction.CHANGE_LANGUAGE,
    payload: action,
  };
};
