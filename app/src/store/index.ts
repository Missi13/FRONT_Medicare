import Vue from 'vue'
import Vuex from 'vuex'
import register from "@/features/register/store";
import alertInfo from "@/features/alertInfo/store";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    register,
    alertInfo
  }
  
})
