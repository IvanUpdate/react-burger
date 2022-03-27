import React, {FC} from "react";
import {useDispatch, useSelector} from "../../../services/hooks";
import {useDrag} from "react-dnd";
import {Link, useLocation } from "react-router-dom";
import {CurrencyIcon, Counter} from "@ya.praktikum/react-developer-burger-ui-components";
import ingredientStyles from './ingredient.module.css';
import {
    DELETE_INGREDIENT,
    SET_INGREDIENT
} from "../../../services/constants";
import {TItem} from "../../../types";

interface TItemObject {
    item: TItem;
}

const Ingredient: FC<TItemObject> = ({item}) => {

    const {image, price, name, _id, type} = item;

    const items = useSelector(state=> state.constructor);

    let qty = type === 'bun' ? items.bunsArray.filter((element: TItem) => element._id === _id).length :
        items.ingredients.filter((element: TItem) => element._id === _id).length;


    const dispatch = useDispatch();

    const location = useLocation();

    const [{isDrag}, dragRef] = useDrag({
        type: 'ingredient',
        item: item,
        collect: monitor => ({
            isDrag: monitor.isDragging(),
        })
    });

    const setElement = () => {
        dispatch({
            type: SET_INGREDIENT,
            payload: item
        })
    };

    return (
        item && (<>
            <Link ref={dragRef} className={ingredientStyles.card + ' mr-2 ml-4 mb-8'}
                  to={{
                      pathname: `/ingredients/${_id}`,
                      state: { background: location }
                  }} onClick={()=>setElement()}>
                <div className={ingredientStyles.counter}><Counter count={qty} size="default"/></div>
                <img src={image} alt='' className={ingredientStyles.image + ' mr-4 ml-4'}/>
                <div className={ingredientStyles.currencyBlock + ' pt-1 pb-1'}>
                    <span className={ingredientStyles.price + ' mr-2'}>{price}</span>
                    <span className={ingredientStyles.currency}><CurrencyIcon type="primary"/></span>
                </div>
                <div className={ingredientStyles.name}>
                    <span>{name}</span>
                </div>
            </Link>
        </>)
    );
}

export default Ingredient;


