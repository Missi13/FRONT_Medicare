import ColorAlert from "@/utils/EnumColorAlert"

export interface alertInfoState {
    message: string,
    color: ColorAlert,
    show: boolean
}
export enum alertInfo_STORE {
    SET_ALERT_MESSAGE = "SET_ALERT_MESSAGE",
    SET_ALERT_COLOR = "SET_ALERT_COLOR",
    SHOW_ALERT = "SHOW_ALERT"
}