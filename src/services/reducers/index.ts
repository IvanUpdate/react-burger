import {combineReducers} from 'redux';
import {ingredientsReducer} from "./ingredients";
import {ingredientReducer} from "./detailed-ingredient";
import {constructorReducer} from "./burger-constructor";
import {orderReducer} from "./order-details";
import {authReducer} from "./auth";
import {wsReducer} from "./wsReducer";


export const rootReducer = combineReducers({
    ingredients: ingredientsReducer,
    ingredient: ingredientReducer,
    constructor: constructorReducer,
    order: orderReducer,
    auth: authReducer,
    ws: wsReducer
});