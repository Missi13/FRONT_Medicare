import { ActionTree, Action } from 'vuex';
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
        .then((rep) => {
            localStorage.setItem('token', rep.data.id_token);

            console.log(rep.data)

            dispatch("alertInfo/showAlertInfo", {
                color: ColorAlert.SUCCESS,
                message: "Vous êtes connecté !",
                show: true
            }, { root: true })
            
            router.push("/");
            // resolve("Success");

        }).catch((error) => {
            commit(s.SET_LOGIN_ERROR, true)

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

export const resetLoginError: Action< LoginState, RootState > = ({ commit }) => {
    commit(s.SET_LOGIN_ERROR, false)
};


export const actions: ActionTree<LoginState, RootState> = {
    loginUser,
    resetLoginError
};