import {compose, createStore, applyMiddleware} from 'redux';
import {rootReducer } from './reducers';
import thunk from 'redux-thunk';
import {socketMiddleware} from "./middleware/socketMiddleware";
import {
    WS_CONNECTION_START,
    WS_CONNECTION_ERROR,
    WS_CONNECTION_CLOSED,
    WS_CONNECTION_SUCCESS,
    WS_GET_DATA,
    WS_GET_DATA_ERROR,
    WS_CONNECTION_AUTH_START,
    WS_CONNECTION_AUTH_SUCCESS,
    WS_CONNECTION_AUTH_CLOSED,
    WS_CONNECTION_AUTH_ERROR,
    WS_GET_AUTH_DATA,
    WS_GET_AUTH_DATA_ERROR
} from "./actions/websocket";


const wsActions = {
    wsInit: WS_CONNECTION_START,
    onOpen: WS_CONNECTION_SUCCESS,
    onClose: WS_CONNECTION_CLOSED,
    onError: WS_CONNECTION_ERROR,
    onMessage: WS_GET_DATA,
    wsError: WS_GET_DATA_ERROR,
};

const wsAuthActions = {
    wsInit: WS_CONNECTION_AUTH_START,
    onOpen: WS_CONNECTION_AUTH_SUCCESS,
    onClose: WS_CONNECTION_AUTH_CLOSED,
    onError: WS_CONNECTION_AUTH_ERROR,
    onMessage: WS_GET_AUTH_DATA,
    wsClose: WS_GET_AUTH_DATA_ERROR,
};

const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
        : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk, socketMiddleware(wsActions), socketMiddleware(wsAuthActions)));

export const store = createStore(rootReducer, enhancer);