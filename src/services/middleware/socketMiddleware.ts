import {Middleware, MiddlewareAPI} from "redux";

import type {AppDispatch, RootState} from "../../types";
import type {TApplicationActions} from "../actions";

export const socketMiddleware = (wsActions: any): Middleware => {
    return (store: MiddlewareAPI<AppDispatch, RootState>) => {
        let socket: WebSocket | null = null;

        return next => (action: TApplicationActions) => {
            const {dispatch} = store;
            const {type} = action;
            const { wsInit, onOpen, onClose, onError, onMessage, wsError } = wsActions;

            if (type === wsInit) {
                //@ts-ignore
                socket = new WebSocket(action.payload);
                //@ts-ignore
                console.log(action.payload);
            }
            if (socket) {

                // функция, которая вызывается при открытии сокета
                socket.onopen = () => {
                    dispatch({type: onOpen});
                    console.log('hey');
                };

                // функция, которая вызывается при ошибке соединения
                socket.onerror = event => {
                    dispatch({type: onError, payload: event});
                };

                // функция, которая вызывается при получения события от сервера
                socket.onmessage = event => {
                    const {data} = event;
                    console.log('start message', data);
                    const appliedData = JSON.parse(data);
                    dispatch({type: onMessage, payload: appliedData});
                    if (!data) {
                        dispatch({type: wsError, payload: event})
                    }
                };
                // функция, которая вызывается при закрытии соединения
                socket.onclose = event => {
                    dispatch({type: onClose, payload: event});
                };
            }

            next(action);
        };
    };
};