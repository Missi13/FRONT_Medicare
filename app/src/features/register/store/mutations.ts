import { MutationTree } from "vuex";
import { RegisterState, REGISTER_STORE as s } from "./types";

export const mutations: MutationTree<RegisterState> = {

    [s.SET_REGISTER_ERROR](state, newVal: boolean) {
        state.registerError = newVal;
    },
    
}