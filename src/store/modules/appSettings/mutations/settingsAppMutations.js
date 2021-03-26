/**
 * мутация переключения темы приложения
 * @param state
 */
export const toggleDark = (state) => {
  state.settingsApp.dark = !state.settingsApp.dark;
};

export const primaryDrawer = (state, payload) => {
  state.settingsApp.primaryDrawer = {
    ...state.settingsApp.primaryDrawer,
    ...payload,
  };
};

export const setFooter = (state, payload) => {
  state.settingsApp.footer = {
    ...state.settingsApp.footer,
    ...payload,
  };
};
