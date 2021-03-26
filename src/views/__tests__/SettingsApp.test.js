import { shallowMount, createLocalVue } from '@vue/test-utils';
import SettingsApp from '@/views/SettingsApp.vue';

import Vuex from 'vuex';
import {
  getDark,
  getDrawers,
  getFooter,
  getPrimaryDrawer,
} from '@/store/getters';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('SettingsApp.vue', () => {
  let actions;
  let state;
  let store;

  beforeEach(() => {
    state = {
      settingsApp: {
        dark: true,
        drawers: ['Default (no property)', 'Permanent', 'Temporary'],
        primaryDrawer: {
          model: null,
          type: 'default (no property)',
          clipped: false,
          floating: false,
          mini: false,
        },
        footer: {
          inset: false,
        },
      },
    };

    actions = {
      toggleDarkAction: jest.fn(),
      setFooterAction: jest.fn(),
      setPrimaryDrawerAction: jest.fn(),
    };

    store = new Vuex.Store({
      modules: {
        myModule: {
          state,
          actions,
          getters: {
            getDark,
            getDrawers,
            getFooter,
            getPrimaryDrawer,
          },
        },
      },
    });
  });

  it('вызывает действие "toggleDarkAction" при изменении dark theme', () => {
    const wrapper = shallowMount(SettingsApp, { store, localVue });
    const button = wrapper.find('#getDark');
    button.trigger('change');
    expect(actions.toggleDarkAction).toHaveBeenCalled();
  });

  it('вызывает действие "setFooterAction" при изменении footer', () => {
    const wrapper = shallowMount(SettingsApp, { store, localVue });
    const button = wrapper.find('#insert');
    button.trigger('change');
    expect(actions.setFooterAction).toHaveBeenCalled();
  });
});
