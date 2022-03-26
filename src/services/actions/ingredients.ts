import {BASE_URL} from "../../http";
import {AppDispatch} from "../../types";

import {
    GET_INGREDIENTS_SUCCESS,
    GET_INGREDIENTS_ERROR,
    GET_INGREDIENTS,
} from "../constants";

import {AppThunk, TItem} from "../../types";

export interface IGetIngredients {
    readonly type: typeof GET_INGREDIENTS;
}

export interface IGetIngredientsError {
    readonly type: typeof GET_INGREDIENTS_ERROR;
}

export interface IGetIngredientsSuccess {
    readonly type: typeof GET_INGREDIENTS_SUCCESS;
    readonly ingredients: Array<TItem>
}

export type IIngredientsActions = IGetIngredients |
    IGetIngredientsError |
    IGetIngredientsSuccess;

export const getIngredients:AppThunk = () => {
    return function (dispatch:AppDispatch) {
        dispatch({
            type: GET_INGREDIENTS
        });
        fetch(BASE_URL+'/ingredients').then(res => {
            if (res && res.ok) {
                return res.json();
            } else {
                dispatch({
                    type: GET_INGREDIENTS_ERROR
                })
            }
        }).then(res => {
                dispatch({
                    type: GET_INGREDIENTS_SUCCESS,
                    ingredients: res.data
                });
            }
        ).catch(err => {
            dispatch({
                type: GET_INGREDIENTS_ERROR
            })
        })
    }
}