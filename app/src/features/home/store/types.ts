import { User } from "@/models/Users";

export interface UserState {
    user: User,
}
export enum USER_STORE {
    SET_USER = "SET_USER",
}