import {$api, $api_user} from "../http";
import {Axios} from "axios";
import {API_URL, API_URL_RESET, API_URL_USER} from "../http";

export default class AuthService {
    static async login(email, password) {
        return $api.post(API_URL+'login', {email, password});
    }

    static async register(email, password, name) {
        return $api.post(API_URL+'register', {email, password, name});
    }

    static async logout(token) {
        return $api.post(API_URL+'logout', {token});
    }

    static async resetPassword(email) {
        return $api.post(API_URL_RESET, {email});
    }

    static async updatePassword(password, token) {
        return $api.post(API_URL_RESET+'/reset', {password, token});
    }

    static async refreshToken(token) {
        return $api.post(API_URL+'token', {token});
    }

    static async getUser() {
        return $api_user.get(API_URL_USER );
    }

    static async updateUser(name, email, password) {
        return $api_user.patch(API_URL_USER, {name, email, password});
    }
}