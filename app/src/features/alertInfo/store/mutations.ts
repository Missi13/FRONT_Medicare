import ColorAlert from "@/utils/EnumColorAlert";
import { MutationTree } from "vuex";
import { alertInfoState, alertInfo_STORE as s } from "./types";
export const mutations: MutationTree< alertInfoState > = {

    [s.SET_ALERT_MESSAGE](state, newVal: string) {
        state.message = newVal;
    },
    [s.SET_ALERT_COLOR](state, newVal: ColorAlert) {
        state.color = newVal;
    },
    [s.SHOW_ALERT](state, newVal: boolean) {
        state.show = newVal;
    }
}
