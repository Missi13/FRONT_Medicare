import { ActionTree, Action } from 'vuex';
import { UserState } from './types';
import { RootState } from '@/store/types';
import api from '@/http/api';
// import { User } from '@/models/Users';
// import router from '@/router';
// import ColorAlert from '@/utils/EnumColorAlert';


export const getUser: Action< UserState, RootState > = ({ dispatch }) => {
    return new Promise((resolve, reject) => {

        api.UserController.getUser()
        .then((rep) => {
            resolve(rep.data);

        }).catch((error) => {

            console.error("Erreur d'authentification !", error);
            reject("Fail")
        })
    })
};

export const getAllPatients: Action< UserState, RootState > = ({ dispatch }) => {
    return new Promise((resolve, reject) => {

        api.PatientController.getAllPatients()
        .then((rep) => {
            resolve(rep.data);

        }).catch((error) => {

            console.error("Erreur d'authentification !", error);
            reject("Fail")
        })
    })
};


export const actions: ActionTree<UserState, RootState> = {
    getUser,
    getAllPatients
};