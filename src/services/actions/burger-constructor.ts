import {v4 as uuidv4} from 'uuid';
import {TItem} from "../../types";
export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const INIT_NEW_CART = 'INIT_NEW_CART';
export const ADD_BUNS = 'ADD_BUNS';
export const REMOVE_BUNS = 'REMOVE_BUNS';
export const MOVE_ITEMS = 'MOVE_ITEMS';

export const addingItem = (item:TItem) => {
    const uuidItem = {...item, uuid: uuidv4()};
    return {
        type: ADD_ITEM,
        payload: uuidItem
    }
};

export const initNewCart = () => {
    return (
        {
            type: INIT_NEW_CART,
        }
    )
};