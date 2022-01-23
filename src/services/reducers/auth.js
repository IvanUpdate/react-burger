import {
    REGISTER_USER,
    REGISTER_USER_ERROR,
    REGISTER_USER_SUCCESS,
    LOGIN_USER,
    LOGIN_USER_ERROR,
    LOGIN_USER_SUCCESS,
    LOGOUT_USER,
    LOGOUT_USER_ERROR,
    LOGOUT_USER_SUCCESS,
    REFRESH_TOKEN,
    REFRESH_TOKEN_ERROR,
    REFRESH_TOKEN_SUCCESS,
    RESET_PASSWORD,
    RESET_PASSWORD_ERROR,
    RESET_PASSWORD_SUCCESS,
    UPDATE_PASSWORD,
    UPDATE_PASSWORD_ERROR,
    UPDATE_PASSWORD_SUCCESS,
    UPDATE_USER,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_ERROR,
    GET_USER,
    GET_USER_ERROR,
    GET_USER_SUCCESS
} from '../actions/auth';

const initialState = {
    user: null,
    userDataRequest: false,
    userDataFailed: false,
    resetPasswordRequest: false,
    resetPasswordApproved: false,
    updatePasswordRequest: false,
    updatePasswordApproved: false,
    refreshTokenRequest: false,
    refreshTokenApproved: false
};

export const authReducer = (state = initialState, action) => {
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
                userDataFailed: true
            };
        }
        case LOGIN_USER_SUCCESS: {
            return {
                ...state,
                user: action.user,
                userDataRequest: false,
                userDataFailed: false,
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
                user: {},
                userDataRequest: false,
                userDataFailed: false,
            };
        }
        case RESET_PASSWORD: {
            return {
                ...state,
                resetPasswordRequest: true
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
                userDataFailed: true
            };
        }
        case GET_USER_SUCCESS: {
            return {
                ...state,
                user: action.user,
                userDataRequest: false,
                userDataFailed: false
            };
        }
        default: {
            return state
        }

    }
}