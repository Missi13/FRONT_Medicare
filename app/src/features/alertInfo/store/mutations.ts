import ColorAlert from "@/utils/EnumColorAlert";
import { MutationTree } from "vuex";
import { AlertInfoState, ALERT_INFO_STORE as s } from "./types";
export const mutations: MutationTree< AlertInfoState > = {

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
