import { MutationTree } from "vuex";
import { LoginState, LOGIN_STORE as s } from "./types";

export const mutations: MutationTree<LoginState> = {

    [s.SET_LOGIN_ERROR](state, newVal: boolean) {
        state.loginError = newVal;
    },
    
}