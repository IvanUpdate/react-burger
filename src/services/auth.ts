import {$api, $api_user} from "../http";
import {API_URL, API_URL_RESET, API_URL_USER} from "../http";

export default class AuthService {
    static async login(email:string, password:string) {
        return $api.post(API_URL+'login', {email, password});
    }

    static async register(email:string, password:string, name:string) {
        return $api.post(API_URL+'register', {email, password, name});
    }

    static async logout(token:string) {
        return $api.post(API_URL+'logout', {token});
    }

    static async resetPassword(email:string) {
        return $api.post(API_URL_RESET, {email});
    }

    static async updatePassword(password:string, token:string) {
        return $api.post(API_URL_RESET+'reset', {password, token});
    }

    static async refreshToken(token:string) {
        return $api.post(API_URL+'token', {token});
    }

    static async getUser() {
        return $api_user.get(API_URL_USER );
    }

    static async updateUser(name:string, email:string, password:string) {
        return $api_user.patch(API_URL_USER, {name, email, password});
    }
}