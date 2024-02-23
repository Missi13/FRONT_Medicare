import { ActionTree, Action } from 'vuex';
import { UserState } from './types';
import { RootState } from '@/store/types';
import api from '@/http/api';
// import { User } from '@/models/Users';
// import router from '@/router';
import ColorAlert from '@/utils/EnumColorAlert';


export const getUser: Action< UserState, RootState > = ({ dispatch }) => {
    return new Promise((resolve, reject) => {

        api.UserController.getUser()
        .then((rep) => {
            resolve(rep.data);

        }).catch((error) => {

            // dispatch("alertInfo/showAlertInfo", {
            //     color: ColorAlert.DANGER,
            //     message: "Erreur d'authentification !",
            //     show: true
            // }, { root: true })

            console.error("Erreur d'authentification !", error);
            reject("Fail")
        })
    })
};


export const actions: ActionTree<UserState, RootState> = {
    getUser
};