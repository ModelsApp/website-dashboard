const initState = {
  typeData: [],
  form: {
    name: "",
    type: "",
    availableDate: "",
    startDate: "",
    uploadDate: "",
    uploadOnDate: ""
  }
};

export default {
  namespaced: true,
  state: initState,
  mutations: {
    typeUpdate(state, data) {
      state.typeData = data;
    },
    updateForm(state, data) {
      state.form = data;
    }
  },
  actions: {
    updateFormItem({ state, commit }, payload) {
      const { val, name } = payload;
      const form = { ...state.form };
      form[name] = val;
      commit("updateForm", form);
    },
    updateTypeData({ commit }) {
      const types = ["type1", "type2"];
      commit("typeUpdate", types);
    }
  },
  getters: {
    form: state => state.form,
    typeData: state => state.typeData
  }
};
