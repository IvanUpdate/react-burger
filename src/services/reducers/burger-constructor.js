import {
    ADD_ITEM,
    REMOVE_ITEM,
    INIT_NEW_CART,
    ADD_BUNS,
    REMOVE_BUNS,
    MOVE_ITEMS
} from "../actions/burger-constructor";

const initialState = {
    ingredients: [],
    count: 0,
    totalPrice: 0,
    bunsArray: [],
};

export const constructorReducer = (state = initialState, action) => {
    switch (action.type) {
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
        case ADD_BUNS:
            return {
                ...state,
                bunsArray: [action.payload, action.payload],
                count: state.count + 2,
                totalPrice: state.totalPrice + 2*action.payload.price
            };
        case REMOVE_BUNS:
            const price = [...state.bunsArray].reduce((sum,element)=>(sum+element.price),0);
            return {
                ...state,
                bunsArray: [],
                count: state.count - 2,
                totalPrice: state.totalPrice - price
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