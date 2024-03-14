import { PatientState } from './types';
import { GetterTree, Getter } from 'vuex';
import { RootState } from '@/store/types';

export const getAllPatients: Getter<PatientState, RootState> = (state) => state.patients;

export const getters: GetterTree<PatientState, RootState> = {
    getAllPatients
}