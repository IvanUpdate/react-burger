import { ingredientReducer as reducer } from './detailed-ingredient';
import * as types from "../../services/constants";
import {mockItemMain, mockItemBun} from "../../utils/mock";

const initialState = {
    item: null,
    show: false
};

describe('detailed ingredient reducer', ()=> {

    it('should return initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState);
    });

    it('should handle SET_INGREDIENT', () => {
        expect(
            reducer(initialState, {
                type: types.SET_INGREDIENT,
                payload: mockItemMain
            })
        ).toEqual(
            {
                item: mockItemMain,
                show: false
            }
        )
    });

    it('should handle DELETE_INGREDIENT', () => {
        expect(
            reducer( {
                item: mockItemMain,
                show: false
            },{
                type: types.DELETE_INGREDIENT,
            })
        ).toEqual(
            {
                ...initialState,
            }
        )
    });



});