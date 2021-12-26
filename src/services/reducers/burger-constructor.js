import {
    ADD_ITEM,
    REMOVE_ITEM,
    SET_CART,
    INIT_NEW_CART,
    ADD_BUN,
    REMOVE_BUN,
    MOVE_ITEMS
} from "../actions/burger-constructor";

const initialState = {
    ingredients: [],
    count: 0,
    totalPrice: 0,
    bunsArray: []
};

export const constructorReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CART:
            return {
                ...state,
                ingredients: [action.payload],
                count: state.count + 1,
                totalPrice: action.payload.price
            };
        case ADD_ITEM:
            return {
                ...state,
                ingredients: [...state.ingredients, action.payload],
                count: state.count + 1,
                totalPrice: state.totalPrice + action.payload.price
            };
        case REMOVE_ITEM:
            let index = [...state.ingredients].findIndex(element => element._id === action.payload._id);
            const newState = [...state.ingredients];
            newState.splice(index, 1);
            return {
                ...state,
                ingredients: newState,
                count: state.count - 1,
                totalPrice: state.totalPrice - action.payload.price
            };
        case ADD_BUN:
            return {
                ...state,
                bunsArray: [...state.bunsArray, action.payload],
                count: state.count + 1,
                totalPrice: state.totalPrice + action.payload.price
            };
        case REMOVE_BUN:
            let tempState = [...state.bunsArray];
            const price = tempState.shift();
            return {
                ...state,
                bunsArray: tempState,
                count: state.count - 1,
                totalPrice: state.totalPrice - price.price
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
                bunsArray: []
            };
        default: {
            return state
        }

    }
}