import { UserState } from './types';
import { GetterTree, Getter } from 'vuex';
import { RootState } from '@/store/types';

export const getUser: Getter<UserState, RootState> = (state) => state.user;

export const getters: GetterTree<UserState, RootState> = {
    getUser
}