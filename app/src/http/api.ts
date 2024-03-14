import axios from "axios";
import { User } from '@/models/Users';
import { Patient } from '@/models/Patients';
import { LoginUser } from '@/models/LoginUser';
//import $config from "@/config";

axios.defaults.baseURL = "http://localhost:8080/";
// à revoir ! le token ne se reinitialise pas seul !!!
axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token')
console.log('le token est: ' + localStorage.getItem("token"))

export default {

    UserController: {
        register(user: User) {
            return axios.post("api/register", user);
        },

        authenticate(loginUser: LoginUser) {
            return axios.post("api/authenticate", loginUser);
        },

        getUser() {
            return axios.get("api/account");
        }
    },

    PatientController: {
        create(patient: Patient) {
            return axios.post("api/patients", patient);
        },

        getPatient(patientId: string) {
            return axios.get("api/patients/" + patientId);
        },

        getAllPatients() {
            return axios.get("api/patients");
        }
    }
}