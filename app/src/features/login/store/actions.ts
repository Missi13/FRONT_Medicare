import { ActionTree, Action, Store } from 'vuex';
import { LoginState, LOGIN_STORE as s } from './types';
import { RootState } from '@/store/types';
import api from '@/http/api';
import { LoginUser } from '@/models/LoginUser';
import router from '@/router';
import ColorAlert from '@/utils/EnumColorAlert';



export const loginUser: Action< LoginState, RootState > = ({ dispatch, commit }, userParams) => {
    return new Promise((resolve, reject) => {
        const user = userParams as LoginUser;
        
        api.UserController.authenticate(user)
        .then((response) => {
            localStorage.setItem('token', response.data.id_token);

            dispatch("alertInfo/showAlertInfo", {
                color: ColorAlert.SUCCESS,
                message: "Vous êtes connecté !",
                show: true
            }, { root: true })

            router.push("/Informations");

            resolve(response.data);

        }).catch((error) => {

            dispatch("alertInfo/showAlertInfo", {
                color: ColorAlert.DANGER,
                message: "Connexion échoué !",
                show: true
            }, { root: true })

            console.error("Erreur lors de la connexion :", error);
            // reject("Fail")
        })
    })
};





export const logoutUser: Action< LoginState, RootState > = ({ dispatch, commit }) => {
    return new Promise((resolve, reject) => {
        
        localStorage.removeItem('token');

        dispatch("alertInfo/showAlertInfo", {
            color: ColorAlert.INFO,
            message: "Vous êtes déconnecté !",
            show: true
        }, { root: true })

        router.push("/login");
    })
};


export const actions: ActionTree<LoginState, RootState> = {
    loginUser,
    logoutUser
};