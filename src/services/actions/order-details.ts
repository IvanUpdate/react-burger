import {BASE_URL} from "../../http";
import {AppThunk, TItem, AppDispatch} from "../../types";

import {
    GET_ORDER_ERROR,
    GET_ORDER,
    GET_ORDER_SUCCESS,
    CLOSE_ORDER
} from "../constants";

export interface IGetOrder {
    readonly type: typeof GET_ORDER;
}

export interface IGetOrderSuccess {
    readonly type: typeof GET_ORDER_SUCCESS;
    readonly payload: {order: {number: number}};
}

export interface IGetOrderError {
    readonly type: typeof GET_ORDER_ERROR;
}

export interface ICloseOrder {
    readonly type: typeof CLOSE_ORDER;
}

export type IGetOrderActions = IGetOrder |
    IGetOrderSuccess |
    IGetOrderError |
    ICloseOrder;

export const getOrder:AppThunk = (ingredients:Array<TItem>) => {
    return function (dispatch:AppDispatch) {
        dispatch({
            type: CLOSE_ORDER
        });
        dispatch({
            type: GET_ORDER
        });
        fetch(BASE_URL + '/orders',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + localStorage.getItem('token'),
                },
                body: JSON.stringify({ingredients: ingredients})
            }).then(res => {
            if (res && res.ok) {
                return res.json();
            } else {
                dispatch({
                    type: GET_ORDER_ERROR
                })
            }
        }).then(res => {
                console.log(res);
                dispatch({
                    type: GET_ORDER_SUCCESS,
                    payload: res
                })
            }
        ).catch(err => {
            dispatch({
                type: GET_ORDER_ERROR
            })
        })
    }

}