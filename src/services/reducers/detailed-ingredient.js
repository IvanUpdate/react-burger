import {
    SHOW_INGREDIENT,
    HIDE_INGREDIENT,
    SET_INGREDIENT,
    DELETE_INGREDIENT
} from '../actions/detailed-ingredient';

const initialState = {
    item: null,
    show: false
};

export const ingredientReducer = (state = initialState, action) => {
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
        case SHOW_INGREDIENT: {
            return {
                ...state,
                show: true
            };
        }
        case HIDE_INGREDIENT: {
            return {
                ...state,
                show: false
            };
        }
        default: {
            return state
        }

    }
}