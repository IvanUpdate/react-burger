import {
    SET_INGREDIENT,
    DELETE_INGREDIENT,
    INIT_INGREDIENT
} from '../actions/detailed-ingredient';

const initialState = {
    item: {},
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
                item: {}
            };
        }
        case INIT_INGREDIENT: {
            return {
                item: {},
                show: false
            };
        }
        default: {
            return state
        }

    }
};