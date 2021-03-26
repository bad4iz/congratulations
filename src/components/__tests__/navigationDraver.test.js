import { shallowMount, createLocalVue } from '@vue/test-utils';
import NavigationDrawer from '@/components/NavigationDrawer.vue';

import Vuex from 'vuex';
const localVue = createLocalVue();

localVue.use(Vuex);

describe('NavigationDrawer.vue', () => {
  let getters;
  let store;

  beforeEach(() => {
    getters = {
      getDark: () => true,
      getDrawers: () => ['Default (no property)', 'Permanent', 'Temporary'],
      getPrimaryDrawer: () => ({
        model: null,
        type: 'default (no property)',
        clipped: false,
        floating: false,
        mini: false,
      }),
      getFooter: () => ({
        inset: false,
      }),
    };

    store = new Vuex.Store({
      getters,
    });
  });
  it('renders', () => {
    const msg = 'Домашняя';
    const wrapper = shallowMount(NavigationDrawer, { store, localVue });
    // const p = wrapper.findAll('*'); // ?
    expect(wrapper.text()).toMatch(msg); //?;
  });
});
