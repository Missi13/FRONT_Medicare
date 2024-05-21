import { AlertInfoState } from './types';
import { GetterTree, Getter } from 'vuex';
import { RootState } from '@/store/types';


export const getAlertMessage: Getter<AlertInfoState, RootState> = (state) => state.message;
export const getAlertColor: Getter<AlertInfoState, RootState> = (state) => state.color;
export const getIsAlertShow: Getter<AlertInfoState, RootState> = (state) => state.show;


export const getters: GetterTree<AlertInfoState, RootState> = {
    getAlertMessage,
    getAlertColor,
    getIsAlertShow

}