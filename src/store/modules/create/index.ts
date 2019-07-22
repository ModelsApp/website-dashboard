const initState = {
  currentStep: 0,
  isFinalStep: false
};

import info from "./info";
import details from "./details";
import images from "./images";

export default {
  namespaced: true,
  state: initState,
  mutations: {
    setStep(state, step) {
      state.currentStep = step;
    },
    setIsFinalStep(state, isFinalStep = false) {
      state.isFinalStep = isFinalStep;
    }
  },
  actions: {
    nextStep({ state, commit }) {
      const nextStep = state.currentStep + 1;
      if (nextStep < 3) {
        commit("setStep", nextStep);
      } else {
        commit("setIsFinalStep", true);
      }
    },
    finishCreate({ commit }) {
      commit("setStep", 0);
      commit("setIsFinalStep", false);
    }
  },
  getters: {
    step: state => state.currentStep,
    isFinalStep: state => state.isFinalStep
  },
  modules: {
    info,
    details,
    images
  }
};
