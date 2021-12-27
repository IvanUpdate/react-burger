import uuid from 'react-uuid';
export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const INIT_NEW_CART = 'INIT_NEW_CART';
export const ADD_BUNS = 'ADD_BUNS';
export const REMOVE_BUNS = 'REMOVE_BUNS';
export const MOVE_ITEMS = 'MOVE_ITEMS';

export const addingItem = (item) => {
    const uuidItem = {...item};
    uuidItem.uuid = uuid();
    return {
        type: ADD_ITEM,
        payload: uuidItem
    }
};