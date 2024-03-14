import { ActionTree, Action } from 'vuex';
import { RegisterState, REGISTER_STORE as s } from './types';
import { RootState } from '@/store/types';
import api from '@/http/api';
import { User } from '@/models/Users';
import router from '@/router';
import ColorAlert from '@/utils/EnumColorAlert';


export const registerUser: Action< RegisterState, RootState > = ({ dispatch, commit }, userParams) => {
    return new Promise((resolve, reject) => {
        const user = userParams as User;
        
        api.UserController.register(user)
        .then((response) => {

            console.log(response.data)

            dispatch("alertInfo/showAlertInfo", {
                color: ColorAlert.SUCCESS,
                message: "Votre compte a été crée avec succés !",
                show: true
            }, { root: true })
            
            router.push("/login");

            resolve("Success");
        }).catch((error) => {
            commit(s.SET_REGISTER_ERROR, true)

            dispatch("alertInfo/showAlertInfo", {
                color: ColorAlert.DANGER,
                message: "Erreur lors de la création du compte !",
                show: true
            }, { root: true })

            console.error("Erreur lors de la création :", error);
            reject("Fail")
        })
    })
};

export const resetRegisterError: Action< RegisterState, RootState > = ({ commit }) => {
    commit(s.SET_REGISTER_ERROR, false)
};


export const actions: ActionTree<RegisterState, RootState> = {
    registerUser,
    resetRegisterError
};