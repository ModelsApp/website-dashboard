const initState = {
  isLoad: {},
  campaign: {
    name: "name"
  }
};

export default {
  namespaced: true,
  state: initState,
  mutations: {
    loadCampaign(state, campaign) {
      state.campaign = campaign;
    }
  },
  actions: {
    async loadCampaign({ state, commit }, id) {
      const campaign = {
        name: "Name"
      };
      commit("loadCampaign", campaign);
    }
  },
  getters: {
    campaign: state => state.campaign
  }
};
