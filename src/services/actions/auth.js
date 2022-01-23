import AuthService from "../auth";

export const REGISTER_USER = 'REGISTER_USER';
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export const REGISTER_USER_ERROR = 'REGISTER_USER_ERROR';
export const LOGIN_USER = 'LOGIN_USER';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_ERROR = 'LOGIN_USER_ERROR';
export const LOGOUT_USER = 'LOGOUT_USER';
export const LOGOUT_USER_SUCCESS = 'LOGOUT_USER_SUCCESS';
export const LOGOUT_USER_ERROR = 'LOGOUT_USER_ERROR';
export const REFRESH_TOKEN = 'REFRESH_TOKEN';
export const REFRESH_TOKEN_SUCCESS = 'REFRESH_TOKEN_SUCCESS';
export const REFRESH_TOKEN_ERROR = 'REFRESH_TOKEN_ERROR';
export const RESET_PASSWORD = 'RESET_PASSWORD';
export const RESET_PASSWORD_SUCCESS = 'RESET_PASSWORD_SUCCESS';
export const RESET_PASSWORD_ERROR = 'RESET_PASSWORD_ERROR';
export const UPDATE_PASSWORD = 'UPDATE_PASSWORD';
export const UPDATE_PASSWORD_ERROR = 'UPDATE_PASSWORD_ERROR';
export const UPDATE_PASSWORD_SUCCESS = 'UPDATE_PASSWORD_SUCCESS';
export const UPDATE_USER = 'UPDATE_USER';
export const UPDATE_USER_ERROR = 'UPDATE_USER_ERROR';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const GET_USER = 'GET_USER';
export const GET_USER_ERROR = 'GET_USER_ERROR';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';


export const registerRequest = (email, password, name) => async (dispatch) => {
    dispatch({
        type: REGISTER_USER
    });
    dispatch({
        type: REFRESH_TOKEN
    });

    try {
        const response = await AuthService.register(email, password, name);
        localStorage.setItem('token', response.data.accessToken.split('Bearer ')[1]);
        localStorage.setItem('rtoken', response.data.refreshToken);
        console.log(response.data);
        dispatch({
            type: REFRESH_TOKEN_SUCCESS
        });
        dispatch({
            type: REGISTER_USER_SUCCESS,
            user: response.data.user
        })
    } catch (e) {
        dispatch({
            type: REFRESH_TOKEN_ERROR
        });
        dispatch({
            type: REGISTER_USER_ERROR
        });
    }
};

export const loginRequest = (email, password) => async (dispatch) => {
    dispatch({
        type: LOGIN_USER
    });
    dispatch({
        type: REFRESH_TOKEN
    });

    try {
        const response = await AuthService.login(email, password);
        localStorage.setItem('token', response.data.accessToken.split('Bearer ')[1]);
        localStorage.setItem('rtoken', response.data.refreshToken);
        console.log(response.data);
        console.log('gh');
        dispatch({
            type: REFRESH_TOKEN_SUCCESS
        });
        dispatch({
            type: LOGIN_USER_SUCCESS,
            user: response.data.user
        })
    } catch (e) {
        console.log('hm');
        dispatch({
            type: REFRESH_TOKEN_ERROR
        });
        dispatch({
            type: LOGIN_USER_ERROR
        });
    }
};

export const logOut = () => async (dispatch) => {
    dispatch({
        type: LOGOUT_USER
    });

    try {
        const response = await AuthService.logout();
        localStorage.removeItem('token');
        localStorage.removeItem('rtoken');
        dispatch({
            type: LOGOUT_USER_SUCCESS
        })
    } catch (e) {
        dispatch({
            type: LOGIN_USER_ERROR
        });
    }
};

export const resetPassword = (email) => async (dispatch) => {
    dispatch({
        type: RESET_PASSWORD
    });

    try {
        const response = await AuthService.resetPassword(email);
        if (response.data.success) {
            dispatch({
                type: RESET_PASSWORD_SUCCESS
            })
        } else {
            dispatch({
                type: RESET_PASSWORD_ERROR
            });
        }
    } catch (e) {
        dispatch({
            type: RESET_PASSWORD_ERROR
        });
    }
};

export const updatePassword = (password, token) => async (dispatch) => {
    dispatch({
        type: UPDATE_PASSWORD
    });

    try {
        const response = await AuthService.updatePassword(password, token);
        if (response.data.success) {
            console.log(response.data);
            dispatch({
                type: UPDATE_PASSWORD_SUCCESS
            })
        } else {
            dispatch({
                type: UPDATE_PASSWORD_ERROR
            });
        }
    } catch (e) {
        dispatch({
            type: UPDATE_PASSWORD_ERROR
        });
    }
};

export const refreshToken = (token) => async (dispatch) => {
    dispatch({
        type: REFRESH_TOKEN
    });

    try {
        const response = await AuthService.refreshToken({token});
        if (response.data.success) {
            localStorage.setItem('token', response.data.accessToken.split('Bearer ')[1]);
            console.log(response.data);
            dispatch({
                type: REFRESH_TOKEN_SUCCESS
            })
        } else {
            dispatch({
                type: REFRESH_TOKEN_ERROR
            });
        }
    } catch (e) {
        dispatch({
            type: REFRESH_TOKEN_ERROR
        });
    }
};

export const getUser = () => async (dispatch) => {
    dispatch({
        type: GET_USER
    });

    try {
        const response = await AuthService.getUser();
        if (response.data.success) {
            console.log(response.data);
            dispatch({
                type: GET_USER_SUCCESS,
                user: response.data.user
            })
        } else {
            dispatch({
                type: GET_USER_ERROR
            });
        }
    } catch (e) {
        dispatch({
            type: GET_USER_ERROR
        });
    }
};

/*export const checkAuth = */


