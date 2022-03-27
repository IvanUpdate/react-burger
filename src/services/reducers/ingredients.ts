import {
    GET_INGREDIENTS,
    GET_INGREDIENTS_SUCCESS,
    GET_INGREDIENTS_ERROR
} from '../constants';

import {IIngredientsActions} from "../actions/ingredients";
import {TItem} from "../../types";

type TState = {
    ingredientsRequest: boolean,
    ingredientsFailed: boolean,
    ingredients: Array<TItem>
}

const initialState: TState = {
    ingredientsRequest: false,
    ingredientsFailed: false,
    ingredients: []
};

export const ingredientsReducer = (state = initialState, action: IIngredientsActions):TState => {
    switch (action.type) {
        case GET_INGREDIENTS: {
            return {
                ...state,
                ingredientsRequest: true,
                ingredientsFailed: false
            };
        }
        case GET_INGREDIENTS_SUCCESS: {
            return {
                ...state,
                ingredients: action.ingredients,
                ingredientsRequest: false,
            };
        }
        case GET_INGREDIENTS_ERROR: {
            return {
                ...state,
                ingredientsRequest: false,
                ingredientsFailed: true
            };
        }
        default: {
            return state
        }

    }
}