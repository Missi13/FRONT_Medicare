import { MutationTree } from "vuex";
import { PatientState, PATIENT_STORE as p } from "./types";
import { Patient } from '@/models/Patients';

export const mutations: MutationTree<PatientState> = {

    [p.SET_PATIENTS](state, newVal: [Patient]) {
        state.patients = newVal;
    },
    
}