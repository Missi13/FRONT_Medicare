import { User } from "@/models/Users";

export interface UserState {
    user: User | null
}
export enum USER_STORE {
    SET_USER = "SET_USER",
    DELETE_USER = "DELETE_USER"
}