import { ActionTree, Action } from 'vuex';
import { UserState, USER_STORE as u } from './types';
import { RootState } from '@/store/types';
import api from '@/http/api';
import router from '@/router';
import ColorAlert from '@/utils/EnumColorAlert';

export const getUser: Action< UserState, RootState > = ({ dispatch, commit }) => {
    return new Promise((resolve, reject) => {

        if(localStorage.getItem('token')) {

            api.UserController.getUser()
            .then((response) => {
                commit(u.SET_USER, response.data);
                resolve(response.data);

            }).catch((error) => {

                console.error("Erreur lors de la récuperation du user !", error);
                router.push("/login");

                dispatch("alertInfo/showAlertInfo", {
                    color: ColorAlert.INFO,
                    message: "veuillez vous authentifier pour continuer !",
                    show: true
                }, { root: true })
                // reject("Fail")
            }) 
        } else {
            router.push("/login");

            dispatch("alertInfo/showAlertInfo", {
                color: ColorAlert.INFO,
                message: "veuillez vous authentifier pour continuer !",
                show: true
            }, { root: true })
        }
    })
};

export const deleteUser: Action< UserState, RootState > = ({ dispatch, commit }) => {
    commit(u.DELETE_USER);
    console.log("user effacé !")
};


export const actions: ActionTree<UserState, RootState> = {
    getUser,
    deleteUser
};