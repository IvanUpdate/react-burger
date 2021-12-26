import {combineReducers} from 'redux';
import {ingredientsReducer} from "./ingredients";
import {ingredientReducer} from "./detailed-ingredient";
import {constructorReducer} from "./burger-constructor";
import {orderReducer} from "./order-details";


export const rootReducer = combineReducers({
    ingredients: ingredientsReducer,
    ingredient: ingredientReducer,
    constructor: constructorReducer,
    order: orderReducer
});