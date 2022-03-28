import {v4 as uuidv4} from 'uuid';
import {TItem} from "../../types";
import {
    ADD_ITEM,
    REMOVE_ITEM,
    INIT_NEW_CART,
    ADD_BUNS,
    REMOVE_BUNS,
    MOVE_ITEMS
} from "../constants";


export interface IAddItem {
    readonly type: typeof ADD_ITEM;
    readonly payload: TItem;
}

export interface IRemoveItem {
    readonly type: typeof REMOVE_ITEM;
    readonly payload: TItem;
}

export interface IInitNewCart {
    readonly type: typeof INIT_NEW_CART;
}

export interface IAddBuns {
    readonly type: typeof ADD_BUNS;
    readonly payload: TItem;
}

export interface IRemoveBuns {
    readonly type: typeof REMOVE_BUNS;
}

export interface IMoveItems {
    readonly type: typeof MOVE_ITEMS;
    readonly dragIndex: number;
    readonly dropIndex: number;
}

export type TItemActions =
    IAddItem |
    IRemoveItem |
    IInitNewCart |
    IAddBuns |
    IRemoveBuns |
    IMoveItems;


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