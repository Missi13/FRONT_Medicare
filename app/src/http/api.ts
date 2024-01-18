import axios from "axios";
import { User } from '@/models/Users';
import { LoginUser } from '@/models/LoginUser';
//import $config from "@/config";

axios.defaults.baseURL = "http://localhost:8080/";

export default {

    UserController: {
        register(user: User) {
            return axios.post("api/register", user);
        },

        authenticate(loginUser: LoginUser) {
            return axios.post("api/authenticate", loginUser);
        },
    }
}