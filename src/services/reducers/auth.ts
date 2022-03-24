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

import {
    TUserActions
} from '../actions/auth';

type TState = {
    user: null | {
        name: string;
        email: string;
    };
    userDataRequest: boolean;
    userDataFailed: boolean;
    resetPasswordRequest: boolean;
    resetPasswordApproved: boolean;
    updatePasswordRequest: boolean;
    updatePasswordApproved: boolean;
    refreshTokenRequest: boolean;
    refreshTokenApproved: boolean;
    updateUserRequest: boolean;
    updateUserApproved: boolean;
    isLogin: boolean;
}

const initialState = {
    user: null,
    userDataRequest: false,
    userDataFailed: false,
    resetPasswordRequest: false,
    resetPasswordApproved: false,
    updatePasswordRequest: false,
    updatePasswordApproved: false,
    refreshTokenRequest: false,
    refreshTokenApproved: false,
    updateUserRequest: false,
    updateUserApproved: false,
    isLogin: false
};

export const authReducer = (state = initialState, action: TUserActions):TState => {
    switch (action.type) {
        case REGISTER_USER: {
            return {
                ...state,
                userDataRequest: true
            };
        }
        case REGISTER_USER_ERROR: {
            return {
                ...state,
                userDataFailed: true
            };
        }
        case REGISTER_USER_SUCCESS: {
            return {
                ...state,
                user: action.user,
                userDataRequest: false,
                userDataFailed: false,
            };
        }
        case LOGIN_USER: {
            return {
                ...state,
                userDataRequest: true
            };
        }
        case LOGIN_USER_ERROR: {
            return {
                ...state,
                userDataFailed: true,
                isLogin: false
            };
        }
        case LOGIN_USER_SUCCESS: {
            return {
                ...state,
                user: action.user,
                userDataRequest: false,
                userDataFailed: false,
                isLogin: true
            };
        }
        case LOGOUT_USER: {
            return {
                ...state,
                userDataRequest: true
            };
        }
        case LOGOUT_USER_ERROR: {
            return {
                ...state,
                userDataFailed: true
            };
        }
        case LOGOUT_USER_SUCCESS: {
            return {
                ...state,
                user: null,
                userDataRequest: false,
                userDataFailed: false,
                isLogin: false
            };
        }
        case RESET_PASSWORD: {
            return {
                ...state,
                resetPasswordRequest: true,
                resetPasswordApproved: false
            };
        }
        case RESET_PASSWORD_ERROR: {
            return {
                ...state,
                resetPasswordRequest: false,
                resetPasswordApproved: false
            };
        }
        case RESET_PASSWORD_SUCCESS: {
            return {
                ...state,
                resetPasswordRequest: false,
                resetPasswordApproved: true
            };
        }
        case UPDATE_PASSWORD: {
            return {
                ...state,
                updatePasswordRequest: true
            };
        }
        case UPDATE_PASSWORD_ERROR: {
            return {
                ...state,
                updatePasswordRequest: false,
                updatePasswordApproved: false
            };
        }
        case UPDATE_PASSWORD_SUCCESS: {
            return {
                ...state,
                updatePasswordRequest: false,
                updatePasswordApproved: true
            };
        }
        case REFRESH_TOKEN: {
            return {
                ...state,
                refreshTokenRequest: true
            };
        }
        case REFRESH_TOKEN_ERROR: {
            return {
                ...state,
                refreshTokenRequest: false,
                refreshTokenApproved: false
            };
        }
        case REFRESH_TOKEN_SUCCESS: {
            return {
                ...state,
                refreshTokenRequest: false,
                refreshTokenApproved: true
            };
        }
        case GET_USER: {
            return {
                ...state,
                userDataRequest: true
            };
        }
        case GET_USER_ERROR: {
            return {
                ...state,
                userDataRequest: false,
                userDataFailed: true,
                isLogin: false
            };
        }
        case GET_USER_SUCCESS: {
            return {
                ...state,
                user: action.user,
                userDataRequest: false,
                userDataFailed: false,
                isLogin: true
            };
        }
        case UPDATE_USER: {
            return {
                ...state,
                updateUserRequest: true
            };
        }
        case UPDATE_USER_ERROR: {
            return {
                ...state,
                updateUserRequest: false,
                updateUserApproved: false,
            };
        }
        case UPDATE_USER_SUCCESS: {
            return {
                ...state,
                user: action.user,
                updateUserRequest: false,
                updateUserApproved: true,
                isLogin: false
            };
        }
        default: {
            return state
        }

    }
}