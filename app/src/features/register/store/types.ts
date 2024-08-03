export interface RegisterState {
    registerError: boolean,
    updateError: boolean,
}
export enum REGISTER_STORE {
    SET_REGISTER_ERROR = "SET_REGISTER_ERROR",
    SET_UPDATE_ERROR = "SET_UPDATE_ERROR",
}