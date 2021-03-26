/**
 * получить цвет темы приложения
 * @param state
 * @returns {boolean}
 */
export const getDark = (state) => state.settingsApp.dark;

export const getDrawers = (state) => state.settingsApp.drawers;

export const getPrimaryDrawer = (state) => state.settingsApp.primaryDrawer;

export const getFooter = (state) => state.settingsApp.footer;
