import {TUserActions} from "./auth";
import {TItemActions} from "./burger-constructor";
import {TIngredientAction} from "./detailed-ingredient";
import {IGetOrderActions} from "./order-details";
import {IIngredientsActions} from "./ingredients";
import {TWSActions} from "./websocket";


export type TApplicationActions =
    TUserActions |
    TItemActions |
    TIngredientAction |
    IGetOrderActions |
    IIngredientsActions |
    TWSActions;

