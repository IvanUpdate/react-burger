import {BASE_URL} from "../../http";
import {TItem} from "../../types";

import {
    GET_ORDER_ERROR,
    GET_ORDER,
    GET_ORDER_SUCCESS,
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

export type IGetOrderActions = IGetOrder |
    IGetOrderSuccess |
    IGetOrderError;

export function getOrder(ingredients:Array<TItem>) {
    return function (dispatch:any) {
        dispatch({
            type: GET_ORDER
        });
        fetch(BASE_URL + '/orders',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
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