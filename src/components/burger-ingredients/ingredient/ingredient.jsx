import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useDrag} from "react-dnd";
import {Link, useLocation } from "react-router-dom";
import {CurrencyIcon, Counter} from "@ya.praktikum/react-developer-burger-ui-components";
import ingredientStyles from './ingredient.module.css';
import PropTypes from 'prop-types';
import Modal from "../../modal/modal";
import IngredientDetails from "../../ingredient-details/ingredient-details";
import shape from "../../../utils/ingredient-type";
import {
    SHOW_INGREDIENT,
    HIDE_INGREDIENT,
    DELETE_INGREDIENT,
    SET_INGREDIENT
} from "../../../services/actions/detailed-ingredient";

function Ingredient({item}) {

    const {image, price, name, _id, type} = item;

    const items = useSelector(state => state.constructor);

    let qty = item.type === 'bun' ? items.bunsArray.filter(element => element._id === _id).length :
        items.ingredients.filter(element => element._id === _id).length;

    const [modal, setModal] = useState(false);

    const dispatch = useDispatch();

    const location = useLocation();

    const [{isDrag}, dragRef] = useDrag({
        type: 'ingredient',
        item: item,
        collect: monitor => ({
            isDrag: monitor.isDragging(),
        })
    });

    /*useEffect(() => {
        setElement();
    });*/

    const showElement = () => {
        dispatch({
            type: SHOW_INGREDIENT
        });
        setModal(true);
    };

    const hideElement = () => {
        dispatch({
            type: HIDE_INGREDIENT
        });
        setModal(false);
    };
    const setElement = () => {
        dispatch({
            type: SET_INGREDIENT,
            payload: item
        })
    };
    const deleteElement = () => {
        dispatch({
            type: DELETE_INGREDIENT,
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

Ingredient.propTypes = {
    item: PropTypes.shape(shape).isRequired
};
