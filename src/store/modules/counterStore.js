export const counterStore = {
  state: {
    count: 0,
  },
  getters: {},
  mutations: {
    INCREMENT(state) {
      state.count++;
    },
  },
  actions: {
    increment({ commit }) {
      commit("INCREMENT");
    },
  },
};
