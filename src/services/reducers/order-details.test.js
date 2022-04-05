import { orderReducer as reducer } from './order-details';
import * as types from "../../services/constants";
import {mockItemMain, order } from "../../utils/mock";

const initialState = {
    orderRequest: false,
    orderFailed: false,
    orderInfo: {order: {number: null}}
};

describe('order details reducer', ()=> {

    it('should return initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState);
    });

    it('should handle GET_ORDER', () => {
        expect(
            reducer(initialState, {
                type: types.GET_ORDER,
            })
        ).toEqual(
            {
                ...initialState,
                orderRequest: true,
                orderFailed: false
            }
        )
    });

    it('should handle GET_ORDER_SUCCESS', () => {
        expect(
            reducer(initialState, {
                type: types.GET_ORDER_SUCCESS,
                payload: order
            })
        ).toEqual(
            {
                ...initialState,
                orderRequest: false,
                orderInfo: order
            }
        )
    });

    it('should handle GET_ORDER_ERROR', () => {
        expect(
            reducer(initialState, {
                type: types.GET_ORDER_ERROR
            })
        ).toEqual(
            {
                ...initialState,
                orderRequest: false,
                orderFailed: true
            }
        )
    });

    it('should handle CLOSE_ORDER', () => {
        expect(
            reducer(initialState, {
                type: types.CLOSE_ORDER
            })
        ).toEqual(
            {
                ...initialState,
                orderInfo: {order: {number: null}},
                orderRequest: false,
                orderFailed: true
            }
        )
    });


});