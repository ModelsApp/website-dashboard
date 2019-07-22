import Vue from "vue";
import Vuex from "vuex";
import VuexPersist from "vuex-persist";

const vuexPersist = new VuexPersist({
  key: "store",
  storage: localStorage
});

Vue.use(Vuex);

import app from "./modules/app";
import create from "./modules/create/index";
import campaign from "./modules/campaign/index";
import dashboard from "./modules/dashboard";

export default new Vuex.Store({
  modules: {
    app,
    create,
    campaign,
    dashboard
  },
  plugins: [vuexPersist.plugin]
});
