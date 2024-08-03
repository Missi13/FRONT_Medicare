import axios from "axios";
import { User } from '@/models/Users';
import { Patient } from '@/models/Patients';
import { LoginUser } from '@/models/LoginUser';
// import $config from "@/config";

axios.defaults.baseURL = "http://localhost:8080/";
// axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token')

export default {

    UserController: {
        register(user: User) {
            return axios.post("api/register", user);
        },
        
        update(user: User) {
            return axios.post("api/update", user, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }
            });
        },

        authenticate(loginUser: LoginUser) {
            return axios.post("api/authenticate", loginUser);
        },

        getUser() {
            return axios.get("api/account", 
            {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }
            });
        }
    },

    PatientController: {
        create(patient: Patient) {
            return axios.post("api/patient", patient, 
            {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }
            });
        },

        getPatient(patientId: string) {
            return axios.get("api/patient/" + patientId, 
            {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }
            });
        },

        getAllPatients() {
            return axios.get("api/patients", 
            {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }
            });
        }
    }
}