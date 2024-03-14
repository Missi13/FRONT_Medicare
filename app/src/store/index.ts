import Vue from 'vue';
import Vuex from 'vuex';
import register from "@/features/register/store";
import login from "@/features/login/store";
import alertInfo from "@/features/alertInfo/store";
import home from "@/features/home/store";
import listeDesPatients from "@/features/home/listeDesPatients/store";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // user: null,
  },

  getters: {
    // getUser(state) {
    //   return state.user;
    // },
  },

  mutations: {
    // setUser(state, newVal) {
    //   state.user = newVal;
    // }
  },

  actions: {
    // updateUser({ commit }, newUser) {
    //   commit('setUser', newUser);
    // },

    // deleteUser({ commit }) {
    //   commit('setUser', null)
    // }
  },

  modules: {
    register,
    login,
    alertInfo,
    home,
    listeDesPatients
  },
});