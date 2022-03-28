import {
    TWSActions,
    WS_CONNECTION_AUTH_CLOSED,
    WS_CONNECTION_AUTH_ERROR,
    WS_CONNECTION_AUTH_START,
    WS_CONNECTION_AUTH_SUCCESS,
    WS_GET_AUTH_DATA,
    WS_GET_AUTH_DATA_ERROR,
    WS_CONNECTION_CLOSED,
    WS_CONNECTION_ERROR,
    WS_CONNECTION_START,
    WS_CONNECTION_SUCCESS,
    WS_GET_DATA,
    WS_GET_DATA_ERROR
} from '../actions/websocket';

import {TFeedData} from "../../types";

interface IFeedState {
    wsConnected: boolean;
    wsConnectedAuth: boolean;
    feed: TFeedData | null;
    feedError: boolean;
    feedGet: boolean;
    error: Event | null;
    errorAuth: Event | null;
    feed_history: TFeedData | null;
    feedGetAuth: boolean;
}

const initialState: IFeedState = {
    wsConnected: false,
    wsConnectedAuth: false,
    feed: null,
    feedError: false,
    feedGet: false,
    error: null,
    errorAuth: null,
    feed_history: null,
    feedGetAuth: false,
};

export const wsReducer = (state = initialState, action: TWSActions) => {
    switch (action.type) {
        case WS_CONNECTION_START:
            return {
                ...state
            };
        case WS_CONNECTION_SUCCESS:
            return {
                ...state,
                wsConnected: true
            };
        case WS_CONNECTION_ERROR:
            return {
                ...state,
                wsConnected: false,
                error: action.payload
            };
        case WS_CONNECTION_CLOSED:
            return {
                ...state,
                wsConnected: false,
                feed: null,
                feedError: false,
                error: null,
                feedGet: false
            };
        case WS_GET_DATA:
            return {
                ...state,
                feed: action.payload,
                feedGet: true
            };
        case WS_GET_DATA_ERROR:
            return {
                ...state,
                feedError: action.payload,
                wsConnected: false,
            };
        case WS_CONNECTION_AUTH_START:
            return {
                ...state
            };
        case WS_CONNECTION_AUTH_SUCCESS:
            return {
                ...state,
                wsConnectedAuth: true
            };
        case WS_CONNECTION_AUTH_ERROR:
            return {
                ...state,
                wsConnectedAuth: false,
                errorAuth: action.payload
            };
        case WS_CONNECTION_AUTH_CLOSED:
            return {
                ...state,
                wsConnectedAuth: false,
                feed_history: null,
                feedErrorAuth: false,
                errorAuth: null,
                feedGetAuth: false
            };
        case WS_GET_AUTH_DATA:
            return {
                ...state,
                feed_history: action.payload,
                feedGetAuth: true
            };
        case WS_GET_AUTH_DATA_ERROR:
            return {
                ...state,
                feedErrorAuth: action.payload,
                wsConnectedAuth: false,
            };
        default:
            return state;
    }
};