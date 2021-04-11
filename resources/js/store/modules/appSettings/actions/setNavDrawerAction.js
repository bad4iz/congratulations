/**
 *  вызываем мутацию нав меню
 * @param commit
 * @param flag
 * @returns {*}
 */
export const setNavDrawerAction = ({ commit }, flag) =>
  commit('setNavDrawer', flag);
