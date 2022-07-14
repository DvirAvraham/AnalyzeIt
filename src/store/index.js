import {createStore} from 'vuex';
import dataStore from './modules/data-store';

const store = createStore({
  strict: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    dataStore,
  },
});

export default store;
