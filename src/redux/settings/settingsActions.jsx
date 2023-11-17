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
export let changeSettingPage = (action) => {
  return {
    type: typeAction.CHANGE_SETTING_PAGE,
    payload: action,
  };
};
export let changeSettingMenu = (action) => {
  return {
    type: typeAction.CHANGE_SETTING_MENU,
    payload: action,
  };
};
export let changeTaser = (action) => {
  return {
    type: typeAction.OPEN_CLOSE_TAFSER,
    payload: action,
  };
};
// export let changeTranslationSettingOpen = (action) => {
//   return {
//     type: typeAction.OPEN_CLOSE_TRANSLATION_SETTING,
//     payload: action,
//   };
// };
