const initState = {};

import info from "./info";
import participants from "./participants";
import bookings from "./booking";

export default {
  namespaced: true,
  state: initState,
  mutations: {},
  actions: {},
  getters: {},
  modules: {
    info,
    participants,
    bookings
  }
};
