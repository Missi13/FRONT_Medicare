import { RegisterState } from './types';
import { GetterTree, Getter } from 'vuex';
import { RootState } from '@/store/types';

export const getInscriptionError: Getter<RegisterState, RootState> = (state) => state.registerError;
export const getUpdateError: Getter<RegisterState, RootState> = (state) => state.updateError;

export const getters: GetterTree<RegisterState, RootState> = {
    getInscriptionError,
    getUpdateError
}