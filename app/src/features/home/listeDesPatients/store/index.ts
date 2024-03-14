import { getters } from "./getters";
import { actions } from "./actions";
import { mutations } from "./mutations";
import { Patient } from '@/models/Patients';

const state = {
    patients: [Patient],
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};