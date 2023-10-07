import axios from "axios";
import { User } from '@/models/Users';
import $config from "@/config";

axios.defaults.baseURL = $config.getApiURL();

export default {

    UserController: {
        register(user: User) {
            return axios.post("/user/register", user);
        },

        login(user: User) {
            return axios.post("/user/login", user);
        },
    }
}