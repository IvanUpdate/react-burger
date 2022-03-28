import {
    ADD_ITEM,
    REMOVE_ITEM,
    INIT_NEW_CART,
    ADD_BUNS,
    REMOVE_BUNS,
    MOVE_ITEMS
} from "../constants";

import { TItemActions } from "../actions/burger-constructor";
import {TItem} from "../../types";

type TState = {
    ingredients: Array<TItem>;
    count: number;
    totalPrice: number;
    bunsArray: Array<TItem>;
    isBunInOrder: boolean;
}

const initialState: TState = {
    ingredients: [],
    count: 0,
    totalPrice: 0,
    bunsArray: [],
    isBunInOrder: false,
};

export const constructorReducer = (state = initialState, action: TItemActions):TState => {
    switch (action.type) {
        case ADD_ITEM:
            return {
                ...state,
                ingredients: [...state.ingredients, action.payload],
                count: state.count + 1,
                totalPrice: state.totalPrice + action.payload.price
            };
        case REMOVE_ITEM:
            let index = [...state.ingredients].findIndex((element: TItem) => element._id === action.payload._id);
            const newState = [...state.ingredients];
            newState.splice(index, 1);
            return {
                ...state,
                ingredients: newState,
                count: state.count - 1,
                totalPrice: state.totalPrice - action.payload.price
            };
        case ADD_BUNS:
            return {
                ...state,
                bunsArray: [action.payload, action.payload],
                count: state.count + 2,
                totalPrice: state.totalPrice + 2*action.payload.price,
                isBunInOrder: true,
            };
        case REMOVE_BUNS:
            const price = [...state.bunsArray].reduce((sum,element: TItem)=>(sum+element.price),0);
            return {
                ...state,
                bunsArray: [],
                count: state.count - 2,
                totalPrice: state.totalPrice - price,
                isBunInOrder: false,
            };
        case MOVE_ITEMS:
            let newItemArray = [...state.ingredients];
            const drag = newItemArray.splice(action.dragIndex, 1);
            newItemArray.splice(action.dropIndex, 0, ...drag);
            return {
                ...state,
                ingredients: newItemArray,
            };
        case INIT_NEW_CART:
            return {
                ...state,
                ingredients: [],
                count: 0,
                totalPrice: 0,
                bunsArray: [],
                isBunInOrder: false
            };
        default: {
            return state
        }

    }
};