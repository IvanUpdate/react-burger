import { constructorReducer as reducer } from './burger-constructor';
import * as types from "../../services/constants";
import {mockItemMain, mockItemBun} from "../../utils/mock";

const initialState = {
    ingredients: [],
    count: 0,
    totalPrice: 0,
    bunsArray: [],
    isBunInOrder: false,
};

describe('burger constructor reducer', ()=> {

    it('should return initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState);
    });

    it('should handle ADD ITEM', () => {
        expect(
            reducer(initialState, {
                type: types.ADD_ITEM,
                payload: mockItemMain
            })
        ).toEqual(
            {
                ...initialState,
                ingredients: [mockItemMain],
                count: 1,
                totalPrice: 3000
            }
        )
    });

    it('should handle REMOVE ITEM', () => {
        expect(
            reducer( {
                ingredients: [mockItemMain],
                count: 1,
                totalPrice: 3000,
                bunsArray: [],
                isBunInOrder: false,
            },{
                type: types.REMOVE_ITEM,
                payload: mockItemMain
            })
        ).toEqual(
            {
                ...initialState,
            }
        )
    });

    it('should handle ADD BUNS', () => {
        expect(
            reducer(initialState, {
                type: types.ADD_BUNS,
                payload: mockItemBun
            })
        ).toEqual(
            {
                ...initialState,
                ingredients: [],
                count: 2,
                totalPrice: 2510,
                bunsArray: [mockItemBun, mockItemBun],
                isBunInOrder: true,
            }
        )
    });

    it('should handle REMOVE BUNS', () => {
        expect(
            reducer( {
                ingredients: [],
                count: 2,
                totalPrice: 2510,
                bunsArray: [mockItemBun, mockItemBun],
                isBunInOrder: true,
            },{
                type: types.REMOVE_BUNS,
            })
        ).toEqual(
            {
                ...initialState,
            }
        )
    });


});