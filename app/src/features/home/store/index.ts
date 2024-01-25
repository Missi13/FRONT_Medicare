import { getters } from "./getters";
import { actions } from "./actions";
import { mutations } from "./mutations";
import { User } from '@/models/Users';

const state = {
    user: User,
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};