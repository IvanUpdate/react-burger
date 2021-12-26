import {API_URL} from "../../components/app/App";

export const GET_ORDER = 'GET_ORDER';
export const GET_ORDER_SUCCESS = 'GET_ORDER_SUCCESS';
export const GET_ORDER_ERROR = 'GET_ORDER_ERROR';

export function getOrder(ingredients) {
    return function (dispatch) {
        dispatch({
            type: GET_ORDER
        });

        fetch(API_URL + 'orders',
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