import Vue from 'vue';
import Vuex from 'vuex';
import * as getters from './getters';
import * as actions from './actions';
import * as mutations from './mutations';
import * as modules from './modules';
import state from './state';

Vue.use(Vuex);

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  modules,
  /**
   * В строгом режиме любая попытка внесения изменений
   * в состояние Vuex, кроме мутаций, будет выбрасывать
   * ошибку. Это гарантирует, что все мутации состояния будут
   * явно отслеживаться через инструменты отладки.
   */
  strict: process.env.NODE_ENV !== 'production',
});

if (module.hot) {
  module.hot.accept(
    ['./getters', './actions', './mutations', './state', './modules'],
    () => {
      store.hotUpdate({
        // eslint-disable-next-line global-require
        getters: require('./getters'),
        // eslint-disable-next-line global-require
        actions: require('./actions'),
        // eslint-disable-next-line global-require
        mutations: require('./mutations'),
        // eslint-disable-next-line global-require
        state: require('./state'),
        modules: import('./modules'),
      });
    }
  );
}

export default store;
