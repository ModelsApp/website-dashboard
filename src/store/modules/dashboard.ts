import api from "@/api";
import campaignUdapter from "@/api/udapters/campaign";

interface DashboardState {
  campaigns: Campaign[];
}

const initState: DashboardState = {
  campaigns: []
};

export default {
  namespaced: true,
  state: initState,
  mutations: {
    campaigns(state: DashboardState, campaigns) {
      state.campaigns = campaigns;
    }
  },
  actions: {
    async loadCampaigns({ commit }): Promise<Campaign[]> {
      const data = await api.getCampaigns();
      console.log("data: ", data);
      const campaigns = data.map(i => campaignUdapter(i));
      return commit("campaigns", campaigns);
    }
  },
  getters: {
    campaigns: state => state.campaigns
  }
};
