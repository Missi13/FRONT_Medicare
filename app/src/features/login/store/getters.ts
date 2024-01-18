import { LoginState } from './types';
import { GetterTree, Getter } from 'vuex';
import { RootState } from '@/store/types';

export const getLoginError: Getter<LoginState, RootState> = (state) => state.loginError;

export const getters: GetterTree<LoginState, RootState> = {
    getLoginError
}