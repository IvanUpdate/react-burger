import $api from "../http";
import {Axios} from "axios";
import {API_URL, API_URL_RESET} from "../http";

export default class AuthService {
    static async login(email, password) {
        return $api.post(API_URL+'login', {email, password});
    }

    static async register(name, email, password) {
        return $api.post(API_URL+'register', {email, password, name});
    }

    static async logout() {
        return $api.post(API_URL+'logout');
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

    static async getUser(token) {
        return $api.get(API_URL+'user', );
    }

    static async updateUser(name, email, password) {
        return $api.post(API_URL+'user', {email, password, name});
    }
}