const initState = {
  isLoading: false,
  participants: []
};

export default {
  namespaced: true,
  state: initState,
  mutations: {
    loadMore(state, participants) {
      state.participants = participants;
    },
    toggleLoading(state) {
      state.loading = !state.loading;
    }
  },
  actions: {
    loadMore({ state, commit }) {
      if (state.isLoading) {
        return;
      }
      commit("toggleLoading");
      const part = state.participants.concat([1, 2, 3, 4, 5, 6]);
      setTimeout(() => {
        commit("loadMore", part);
        commit("toggleLoading");
      }, 20);
    }
  },
  getters: {
    participants: state => state.participants,
    isLoading: state => state.isLoading
  }
};
