import {dataService} from '../../services/data-service';

export default {
  state: {
    data: null,
    filterBy: {
      name: '',
    },
  },
  getters: {
    data(state) {
      return state.data;
    },
  },
  mutations: {
    setData(state, {data}) {
      state.data = data;
    },
    setFilter(state, {filterBy}) {
      state.filterBy = filterBy;
    },
  },
  actions: {
    async loadData({commit, state}) {
      try {
        const data = await dataService.query(state.filterBy);
        commit({type: 'setData', data});
      } catch (err) {
        console.log('Err while loading data..', err);
      }
    },
    filter({commit, dispatch}, {filterBy}) {
      commit({type: 'setFilter', filterBy});
      dispatch({type: 'loadData'});
    },
  },
};
