import {
    SET_INGREDIENT,
    DELETE_INGREDIENT,
    INIT_INGREDIENT,
} from "../constants";
import {TItem} from "../../types";

export interface ISetIngredient {
    readonly type: typeof SET_INGREDIENT;
    readonly payload: TItem;
}

export interface IDeleteIngredient {
    readonly type: typeof DELETE_INGREDIENT;
}

export interface IInitIngredient {
    readonly type: typeof INIT_INGREDIENT;
}

export type TIngredientAction =
    ISetIngredient |
    IDeleteIngredient |
    IInitIngredient;

export const deleteIngredient = () => {
    return (
        {
            type: DELETE_INGREDIENT,
        }
    )
};

export const initIngredient = () => {
    return (
        {
            type: INIT_INGREDIENT,
        }
    )
};


