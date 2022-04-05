import { ingredientsReducer as reducer } from './ingredients';
import * as types from "../../services/constants";
import {mockItemMain } from "../../utils/mock";

const initialState = {
    ingredientsRequest: false,
    ingredientsFailed: false,
    ingredients: []
};

describe('ingredients reducer', ()=> {

    it('should return initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState);
    });

    it('should handle GET_INGREDIENTS', () => {
        expect(
            reducer(initialState, {
                type: types.GET_INGREDIENTS,
            })
        ).toEqual(
            {
                ...initialState,
                ingredientsRequest: true,
                ingredientsFailed: false
            }
        )
    });

    it('should handle GET_INGREDIENTS_SUCCESS', () => {
        expect(
            reducer(initialState, {
                type: types.GET_INGREDIENTS_SUCCESS,
                ingredients: [mockItemMain, mockItemMain, mockItemMain]
            })
        ).toEqual(
            {
                ...initialState,
                ingredients: [mockItemMain, mockItemMain, mockItemMain],
                ingredientsRequest: false,
            }
        )
    });

    it('should handle GET_INGREDIENTS_ERROR', () => {
        expect(
            reducer(initialState, {
                type: types.GET_INGREDIENTS_ERROR
            })
        ).toEqual(
            {
                ...initialState,
                ingredientsRequest: false,
                ingredientsFailed: true
            }
        )
    });


});