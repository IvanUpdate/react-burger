import {
    SET_INGREDIENT,
    DELETE_INGREDIENT,
    INIT_INGREDIENT
} from '../constants';

import {TIngredientAction} from "../actions/detailed-ingredient";
import {TItem} from "../../types";

type TState = {
    item: null | TItem;
    show?: boolean
}

const initialState: TState = {
    item: null,
    show: false
};

export const ingredientReducer = (state = initialState, action: TIngredientAction):TState => {
    switch (action.type) {
        case SET_INGREDIENT: {
            return {
                ...state,
                item: action.payload
            };
        }
        case DELETE_INGREDIENT: {
            return {
                ...state,
                item: null
            };
        }
        case INIT_INGREDIENT: {
            return {
                item: null,
                show: false
            };
        }
        default: {
            return state
        }

    }
};