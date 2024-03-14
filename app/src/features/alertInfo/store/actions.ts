import { ActionTree, Action } from 'vuex';
import { RootState } from '@/store/types';
import { AlertInfoState, ALERT_INFO_STORE as s } from './types';
import ColorAlert from '@/utils/EnumColorAlert';

export const showAlertInfo: Action< AlertInfoState, RootState > = ({ commit }, payload) => {
   commit(s.SET_ALERT_MESSAGE, payload.message);
   commit(s.SET_ALERT_COLOR, payload.color);
   commit(s.SHOW_ALERT, payload.show);
};

export const resetAll: Action< AlertInfoState, RootState > = ({ commit }) => {
   commit(s.SET_ALERT_MESSAGE, "Message par default")
   commit(s.SET_ALERT_COLOR, ColorAlert.INFO)
   commit(s.SHOW_ALERT, false)

};

export const actions: ActionTree< AlertInfoState, RootState > = {
   showAlertInfo,
   resetAll
};