import axios from "axios";

export const API_URL = 'https://norma.nomoreparties.space/api/auth/';
export const API_URL_USER = 'https://norma.nomoreparties.space/api/auth/user';
export const API_URL_RESET = 'https://norma.nomoreparties.space/api/password-reset';

export const $api =axios.create({
    baseURL: API_URL
});

export const $api_user =axios.create({
    baseURL: API_URL_USER
});

$api_user.interceptors.request.use(config => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
});

$api_user.interceptors.response.use((config) => {
    return config;
}, (async (error) => {
    const originalRequest   = error.config;
    if(error.response.status == 401) {
        try {
            const refreshToken = localStorage.getItem('rtoken');
            const response =  await axios.post(API_URL+'token', {refreshToken});
            localStorage.setItem('token', response.data.accessToken.split('Bearer ')[1]);
            return $api_user.request(originalRequest);
        } catch (e) {
            console.log("Пользователь не авторизован");
        }
    }
}));
