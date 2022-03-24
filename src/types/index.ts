import { store } from '../services/store';
import { Action, ActionCreator } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { TApplicationActions} from "../services/actions";

export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<TReturn = void> = ActionCreator<ThunkAction<TReturn, Action, RootState, TApplicationActions>
    >;
export type AppDispatch = typeof store.dispatch;

export type TItem = {
    _id: string,
    name: string,
    type: 'bun' | 'sauce' | 'main',
    proteins: number,
    fat: number,
    carbohydrates: number,
    calories: number,
    price: number,
    image: string,
    image_mobile: string,
    image_large: string,
    __v: number,
};

export type TItemValue = 'bun' | 'sauce' | 'main';

export type TUserRequest = {
    email: string;
    password: string;
    name: string;
}

export type TLoginRequest = {
    email: string;
    password: string;
}

export type TResetPassword = {
    email: string;
}

export type TUpdatePassword = {
    password: string;
    token: string;
}

export type TOrder = {
    ingredients: string[];
    _id: string;
    status: string;
    number: number;
    createdAt: string;
    updatedAt: string;
    name:string;
}

export type TFeedData = {
    success: boolean;
    orders: TOrder[];
    total: number;
    totalToday: number;
}

