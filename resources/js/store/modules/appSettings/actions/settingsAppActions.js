/**
 * переключаем тему приложения
 * @param commit
 */
export const toggleDarkAction = ({ commit }) => {
  commit('toggleDark');
};

export const setPrimaryDrawerAction = ({ commit }, payload) => {
  commit('primaryDrawer', payload);
};

export const setFooterAction = ({ commit }, payload) => {
  commit('setFooter', payload);
};
