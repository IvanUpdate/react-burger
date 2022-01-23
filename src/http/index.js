import axios from "axios";

export const API_URL = 'https://norma.nomoreparties.space/api/auth/';
export const API_URL_RESET = 'https://norma.nomoreparties.space/api/password-reset';

const $api =axios.create({
    baseURL: API_URL
});

$api.interceptors.request.use(config => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
});

$api.interceptors.response.use((config) => {
    return config;
}, (async (error) => {
    const originalRequest   = error.config;
    if(error.response.status == 401) {
        try {
            const refreshToken = localStorage.getItem('rtoken');
            const response =  await axios.post(API_URL+'token', {refreshToken});
            localStorage.setItem('token', response.data.accessToken.split('Bearer ')[1]);
            return $api.request(originalRequest);
        } catch (e) {
            console.log("Пользователь не авторизован");
        }
    }
}));

export default $api;

//test34-data@yandex.ru