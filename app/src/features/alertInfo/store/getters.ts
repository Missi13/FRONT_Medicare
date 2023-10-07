import { alertInfoState } from './types';
import { GetterTree, Getter } from 'vuex';
import { RootState } from '@/store/types';


export const getAlertMessage: Getter<alertInfoState, RootState> = (state) => state.message;
export const getAlertColor: Getter<alertInfoState, RootState> = (state) => state.color;
export const getIsAlertShow: Getter<alertInfoState, RootState> = (state) => state.show;


export const getters: GetterTree<alertInfoState, RootState> = {
    getAlertMessage,
    getAlertColor,
    getIsAlertShow

}