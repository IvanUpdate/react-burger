import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from 'react-router-dom';
import {useDrop} from "react-dnd";
import {v4 as uuidv4} from 'uuid';
import burgerConstructorStyles from './burger-constructor.module.css';
import {
    CurrencyIcon,
    Button,
} from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from "../modal/modal";
import OrderDetails from '../order-details/order-details';
import BurgerIngredient from "./burger-constructor-ingredient/burger-constructor-ingredient";
import {TItem} from "../../types";
import {getOrder} from "../../services/actions/order-details";
import {addingItem} from "../../services/actions/burger-constructor";
import {
    INIT_NEW_CART,
    ADD_BUNS,
    REMOVE_BUNS,
} from "../../services/actions/burger-constructor";

export default function BurgerConstructor() {

    const dispatch = useDispatch();
    const history = useHistory();
    const orderIngredients = useSelector((state: any) => state.constructor.ingredients);
    const count = useSelector((state: any) => state.constructor.count);
    const [modal, setModal] = useState(false);
    const price = useSelector((state: any) => state.constructor.totalPrice);
    const bunsArray = useSelector((state: any) => state.constructor.bunsArray);
    const isBunInOrder = useSelector((state: any) => state.constructor.isBunInOrder);
    const isLogin = useSelector((state: any) => state.auth.isLogin);

    const onDropHandler = (itemId:TItem) => {
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
        drop: function (itemId:TItem) {
            onDropHandler(itemId);
        },
    });

    const [, dropTargetFirst] = useDrop({
        accept: 'ingredient',
        drop(itemId: TItem) {
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
                        {orderIngredients && orderIngredients.map((item:TItem, index:number) => {
                            if (item.type !== 'bun') {
                                return (
                                    <BurgerIngredient item={item} index={index} key={uuidv4()}/>
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

