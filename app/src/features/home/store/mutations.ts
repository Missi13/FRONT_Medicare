import { MutationTree } from "vuex";
import { UserState, USER_STORE as s } from "./types";
import { User } from '@/models/Users';

export const mutations: MutationTree<UserState> = {

    [s.SET_USER](state, newVal: User) {
        state.user = newVal;
    },
    
}