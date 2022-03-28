import AuthService from "../auth";
import {TUserRequest, TLoginRequest, TResetPassword, TUpdatePassword, AppThunk, AppDispatch} from "../../types";

import {
    REGISTER_USER,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_ERROR,
    LOGIN_USER,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_ERROR,
    LOGOUT_USER,
    LOGOUT_USER_SUCCESS,
    LOGOUT_USER_ERROR,
    REFRESH_TOKEN,
    REFRESH_TOKEN_SUCCESS,
    REFRESH_TOKEN_ERROR,
    RESET_PASSWORD,
    RESET_PASSWORD_SUCCESS,
    RESET_PASSWORD_ERROR,
    UPDATE_PASSWORD,
    UPDATE_PASSWORD_ERROR,
    UPDATE_PASSWORD_SUCCESS,
    UPDATE_USER,
    UPDATE_USER_ERROR,
    UPDATE_USER_SUCCESS,
    GET_USER,
    GET_USER_ERROR,
    GET_USER_SUCCESS,

} from '../constants'

export interface IRegisterUser {
    readonly type: typeof REGISTER_USER;
}

export interface IRegisterUserSuccess {
    readonly type: typeof REGISTER_USER_SUCCESS;
    readonly user: {
        readonly name: string;
        readonly email: string;
    };
}

export interface IRegisterUserError {
    readonly type: typeof REGISTER_USER_ERROR;
}

export interface ILoginUser {
    readonly type: typeof LOGIN_USER;
}

export interface ILoginUserSuccess {
    readonly type: typeof LOGIN_USER_SUCCESS;
    readonly user: {
        readonly name: string;
        readonly email: string;
    };
}

export interface ILoginUserError {
    readonly type: typeof LOGIN_USER_ERROR;
}

export interface ILogoutUser {
    readonly type: typeof LOGOUT_USER;
}

export interface ILogoutUserSuccess {
    readonly type: typeof LOGOUT_USER_SUCCESS;
}

export interface ILogoutUserError {
    readonly type: typeof LOGOUT_USER_ERROR;
}

export interface IRefreshToken {
    readonly type: typeof REFRESH_TOKEN;
}

export interface IRefreshTokenSuccess {
    readonly type: typeof REFRESH_TOKEN_SUCCESS;
}

export interface IRefreshTokenError {
    readonly type: typeof REFRESH_TOKEN_ERROR;
}

export interface IResetPassword {
    readonly type: typeof RESET_PASSWORD;
}

export interface IResetPasswordSuccess {
    readonly type: typeof RESET_PASSWORD_SUCCESS;
}

export interface IResetPasswordError {
    readonly type: typeof RESET_PASSWORD_ERROR;
}

export interface IUpdatePassword {
    readonly type: typeof UPDATE_PASSWORD;
}

export interface IUpdatePasswordSuccess {
    readonly type: typeof UPDATE_PASSWORD_SUCCESS;
}

export interface IUpdatePasswordError {
    readonly type: typeof UPDATE_PASSWORD_ERROR;
}

export interface IUpdateUser {
    readonly type: typeof UPDATE_USER;
}

export interface IUpdateUserSuccess {
    readonly type: typeof UPDATE_USER_SUCCESS;
    readonly user: {
        readonly name: string;
        readonly email: string;
    };
}

export interface IUpdateUserError {
    readonly type: typeof UPDATE_USER_ERROR;
}

export interface IGetUser {
    readonly type: typeof GET_USER;
}

export interface IGetUserError {
    readonly type: typeof GET_USER_ERROR;
}

export interface IGetUserSuccess {
    readonly type: typeof GET_USER_SUCCESS;
    readonly user: {
        readonly name: string;
        readonly email: string;
    };
}

export type TUserActions =
    IRegisterUser |
    IRegisterUserSuccess |
    IRegisterUserError |
    ILoginUser |
    ILoginUserError |
    ILoginUserSuccess |
    IRefreshToken |
    IRefreshTokenError |
    IRefreshTokenSuccess |
    IResetPassword |
    IResetPasswordError |
    IResetPasswordSuccess |
    IUpdatePassword |
    IUpdatePasswordError |
    IUpdatePasswordSuccess |
    IUpdateUser |
    IUpdateUserError |
    IUpdateUserSuccess |
    IGetUser |
    IGetUserError |
    IGetUserSuccess |
    ILogoutUser |
    ILogoutUserError |
    ILogoutUserSuccess;

export const registerRequest:AppThunk = ({email, password, name}:TUserRequest): ((dispatch:AppDispatch)=>Promise<void>) => async (dispatch) => {
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
        if (response.data.success) {
        dispatch({
            type: REFRESH_TOKEN_SUCCESS
        });
        dispatch({
            type: REGISTER_USER_SUCCESS,
            user: response.data.user
        }) } else {
            dispatch({
                type: REFRESH_TOKEN_ERROR
            });
            dispatch({
                type: REGISTER_USER_ERROR
            });
        }
    } catch (e) {
        dispatch({
            type: REFRESH_TOKEN_ERROR
        });
        dispatch({
            type: REGISTER_USER_ERROR
        });
    }
};

export const loginRequest:AppThunk = ({email, password}:TLoginRequest):((dispatch:AppDispatch)=>Promise<void>) => async (dispatch) => {
    dispatch({
        type: LOGIN_USER
    });
    dispatch({
        type: REFRESH_TOKEN
    });

    try {
        const response = await AuthService.login(email, password);
        console.log(response);
        localStorage.setItem('token', response.data.accessToken.split('Bearer ')[1]);
        localStorage.setItem('rtoken', response.data.refreshToken);
        if (response.data.success) {
            dispatch({
                type: REFRESH_TOKEN_SUCCESS
            });
            dispatch({
                type: LOGIN_USER_SUCCESS,
                user: response.data.user
            })
        } else {
            dispatch({
                type: REFRESH_TOKEN_ERROR
            });
            dispatch({
                type: LOGIN_USER_ERROR
            });
        }
    } catch (e) {
        dispatch({
            type: REFRESH_TOKEN_ERROR
        });
        dispatch({
            type: LOGIN_USER_ERROR
        });
    }
};

export const logOut:AppThunk = ():((dispatch:AppDispatch)=>Promise<void>) => async (dispatch) => {
    dispatch({
        type: LOGOUT_USER
    });

    try {
        const token = localStorage.getItem('rtoken')!;
        const response = await AuthService.logout(token);
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

export const resetPassword:AppThunk = ({email}:TResetPassword):(dispatch:AppDispatch)=>Promise<void> => async (dispatch) => {
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

export const updatePassword:AppThunk = ({password, token}:TUpdatePassword):(dispatch:AppDispatch)=>Promise<void> => async (dispatch) => {
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

export const getUser:AppThunk = ():((dispatch:AppDispatch)=>Promise<void>) => async (dispatch) => {
    dispatch({
        type: GET_USER
    });

    try {
        const response = await AuthService.getUser();
        if (response.data.success) {
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

export const updateUser:AppThunk = ({name, email, password}:TUserRequest):(dispatch:AppDispatch)=>Promise<void> => async (dispatch) => {
    dispatch({
        type: UPDATE_USER
    });

    try {
        const response = await AuthService.updateUser(name, email, password);
        console.log(response.data);
        if (response.data.success) {
            console.log(response.data);
            dispatch({
                type: UPDATE_USER_SUCCESS,
                user: response.data.user
            })
        } else {
            console.log('wrong1');
            dispatch({
                type: UPDATE_USER_ERROR
            });
        }
    } catch (e) {
        console.log('wrong2');
        dispatch({
            type: UPDATE_USER_ERROR
        });
    }
};


