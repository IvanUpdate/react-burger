import {
    GET_ORDER, GET_ORDER_ERROR, GET_ORDER_SUCCESS
} from "../constants";

import {IGetOrderActions} from "../actions/order-details";

type TState = {
    orderRequest: boolean,
    orderFailed: boolean,
    orderInfo?: {order: {number: number}}
}

const initialState = {
    orderRequest: false,
    orderFailed: false,
    orderInfo: {order: {number: 0}}
};

export const orderReducer = (state = initialState, action:IGetOrderActions): TState => {
    switch (action.type) {
        case GET_ORDER: {
            return {
                ...state,
                orderRequest: true,
                orderFailed: false
            };
        }
        case GET_ORDER_SUCCESS: {
            return {
                ...state,
                orderRequest: false,
                orderInfo: action.payload
            };
        }
        case GET_ORDER_ERROR: {
            return {
                ...state,
                orderRequest: false,
                orderFailed: true
            };
        }
        default: {
            return state
        }
    }

}