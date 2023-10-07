import { ActionTree, Action } from 'vuex';
import { RootState } from '@/store/types';
import { alertInfoState, alertInfo_STORE as s } from './types';
import ColorAlert from '@/utils/EnumColorAlert';

export const showAlertInfo: Action< alertInfoState, RootState > = ({ commit }, payload) => {
   commit(s.SET_ALERT_MESSAGE, payload.message);
   commit(s.SET_ALERT_COLOR, payload.color);
   commit(s.SHOW_ALERT, payload.show);
};

export const resetAll: Action< alertInfoState, RootState > = ({ commit }) => {
   commit(s.SET_ALERT_MESSAGE, "Message par default")
   commit(s.SET_ALERT_COLOR, ColorAlert.INFO)
   commit(s.SHOW_ALERT, false)

};

export const actions: ActionTree< alertInfoState, RootState > = {
   showAlertInfo,
   resetAll
};