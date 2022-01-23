import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from 'react-router-dom';
import {useDrop} from "react-dnd";
import uuid from 'react-uuid';
import burgerConstructorStyles from './burger-constructor.module.css';
import {
    CurrencyIcon,
    Button,
} from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import Modal from "../modal/modal";
import OrderDetails from '../order-details/order-details';
import BurgerIngredient from "./burger-constructor-ingredient/burger-constructor-ingredient";
import ingredientType from "../../utils/ingredient-type";
import {getOrder} from "../../services/actions/order-details";
import {addingItem} from "../../services/actions/burger-constructor";
import {
    ADD_ITEM,
    INIT_NEW_CART,
    ADD_BUNS,
    REMOVE_BUNS,
} from "../../services/actions/burger-constructor";


export default function BurgerConstructor() {

    const dispatch = useDispatch();
    const history = useHistory();
    const orderIngredients = useSelector(state => state.constructor.ingredients);
    const count = useSelector(state => state.constructor.count);
    const [modal, setModal] = useState(false);
    const price = useSelector(state => state.constructor.totalPrice);
    const bunsArray = useSelector(state => state.constructor.bunsArray);
    const isBunInOrder = useSelector(state => state.constructor.isBunInOrder);
    const isLogin = useSelector((store) => store.auth.isLogin);

    const onDropHandler = (itemId) => {
        if (itemId.type === 'bun') {
            if (isBunInOrder) {
                dispatch({
                    type: REMOVE_BUNS,
                });
            }
            dispatch({
                type: ADD_BUNS,
                payload: itemId
            });
        } else {
            dispatch(addingItem(itemId));
        }
    };

    const [, dropTarget] = useDrop({
        accept: 'ingredient',
        drop: function (itemId) {
            onDropHandler(itemId);
        },
    });

    const [, dropTargetFirst] = useDrop({
        accept: 'ingredient',
        drop(itemId) {
            onDropHandler(itemId);
        },
    });

    const [, drop] = useDrop(() => ({accept: 'constructor-ingredient'}));

    const switchModal = () => {
        setModal(!modal);
    };

    const handleOrder = () => {
        if (!isLogin) {
            switchModal();
            history.replace('/login');
        } else {
            dispatch(getOrder([...orderIngredients, ...bunsArray]));
            switchModal();
        }
    };

    if (!count) {
        return (<h1 ref={dropTargetFirst} className={burgerConstructorStyles.header}>Начните перетаскивать ингредиенты
            сюда</h1>);
    } else {
        return (
            <>
                <div className={burgerConstructorStyles.main + ' pt-25'} ref={dropTarget}>
                    {isBunInOrder && <BurgerIngredient item={bunsArray[0]} layout='top'/>}
                    <div className={burgerConstructorStyles.scrollArea} ref={drop}>
                        {orderIngredients && orderIngredients.map((item, index) => {
                            if (item.type !== 'bun') {
                                return (
                                    <BurgerIngredient item={item} index={index} key={item.uuid}/>
                                )
                            }
                        })}
                    </div>
                    {isBunInOrder && <BurgerIngredient item={bunsArray[1]} layout='bottom'/>}
                    <div className={burgerConstructorStyles.total + ' mt-10'}>
                        <span className={burgerConstructorStyles.price + ' mr-10'}>{price}<CurrencyIcon
                            type="primary"/></span>
                        {isBunInOrder && <Button type="primary" size="medium" onClick={() => {
                            handleOrder();
                        }}>
                            Оформить заказ
                        </Button>}
                    </div>
                </div>
                {modal && (
                    <Modal title="" closeTheWindow={() => {
                        setModal(false);
                        dispatch({
                            type: INIT_NEW_CART,
                        });
                    }}>
                        <OrderDetails/>
                    </Modal>)}
            </>
        )
    }
}

BurgerConstructor.propTypes = {
    orderIngredients: PropTypes.arrayOf(PropTypes.shape(ingredientType)),
};