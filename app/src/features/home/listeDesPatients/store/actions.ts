import { ActionTree, Action } from 'vuex';
import { PatientState, PATIENT_STORE as p } from './types';
import { RootState } from '@/store/types';
import api from '@/http/api';
import router from '@/router';
import ColorAlert from '@/utils/EnumColorAlert';

export const getAllPatients: Action< PatientState, RootState > = ({ dispatch, commit }) => {
    return new Promise((resolve, reject) => {

        if(localStorage.getItem('token')) {

            api.PatientController.getAllPatients()
            .then((response) => {
                commit(p.SET_PATIENTS, response.data);
                resolve(response.data);

            }).catch((error) => {

                console.error("Erreur d'authentification !", error);
                router.push("/login");

                dispatch("alertInfo/showAlertInfo", {
                    color: ColorAlert.INFO,
                    message: "veuillez vous authentifier pour continuer !",
                    show: true
                }, { root: true })
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


export const actions: ActionTree<PatientState, RootState> = {
    getAllPatients
};