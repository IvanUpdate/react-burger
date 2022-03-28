import {
    GET_ORDER, GET_ORDER_ERROR, GET_ORDER_SUCCESS, CLOSE_ORDER
} from "../constants";

import {IGetOrderActions} from "../actions/order-details";

type TState = {
    orderRequest: boolean,
    orderFailed: boolean,
    orderInfo: {order: {number: number | null}}
}

const initialState: TState = {
    orderRequest: false,
    orderFailed: false,
    orderInfo: {order: {number: null}}
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
        case CLOSE_ORDER: {
            return {
                ...state,
                orderInfo: {order: {number: null}},
                orderRequest: false,
                orderFailed: true
            };
        }
        default: {
            return state
        }
    }

}