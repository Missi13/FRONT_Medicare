import { getters } from "./getters";
import { actions } from "./actions";
import { mutations } from "./mutations";
import ColorAlert from "@/utils/EnumColorAlert"
const state = {
    message: "Message par default",
    color: ColorAlert.INFO,
    show: true
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations

};