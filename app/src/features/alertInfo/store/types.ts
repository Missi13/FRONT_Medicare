import ColorAlert from "@/utils/EnumColorAlert"

export interface AlertInfoState {
    message: string,
    color: ColorAlert,
    show: boolean
}
export enum ALERT_INFO_STORE {
    SET_ALERT_MESSAGE = "SET_ALERT_MESSAGE",
    SET_ALERT_COLOR = "SET_ALERT_COLOR",
    SHOW_ALERT = "SHOW_ALERT"
}