import Vue from 'vue'
import Vuex from 'vuex'
import register from "@/features/register/store";
import login from "@/features/login/store";
import alertInfo from "@/features/alertInfo/store";
import home from "@/features/home/store"

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
    login,
    alertInfo,
    home
  }
  
})
