import React, {useState} from "react";
import {useDispatch, useSelector} from "../../services/hooks";
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
    REMOVE_BUNS, CLOSE_ORDER,
} from "../../services/constants";

export default function BurgerConstructor() {

    const dispatch = useDispatch();
    const history = useHistory();
    const orderIngredients = useSelector(state => state.constructor.ingredients);
    const {count} = useSelector((state) => state.constructor);
    const [modal, setModal] = useState(false);
    const {totalPrice} = useSelector((state) => state.constructor);
    const {bunsArray} = useSelector((state) => state.constructor);
    const {isBunInOrder} = useSelector((state) => state.constructor);
    const {isLogin} = useSelector((state) => state.auth);

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
        return (<h1 data-cy="dropTarget" ref={dropTargetFirst} className={burgerConstructorStyles.header}>?????????????? ?????????????????????????? ??????????????????????
            ????????</h1>);
    } else {
        return (
            <>
                <div className={burgerConstructorStyles.main + ' pt-25'} ref={dropTarget} data-cy="dropTarget">
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
                        <span className={burgerConstructorStyles.price + ' mr-10'}>{totalPrice}<CurrencyIcon
                            type="primary"/></span>
                        {isBunInOrder && <Button type="primary" size="medium" onClick={() => {
                            handleOrder();
                        }}>
                            ???????????????? ??????????
                        </Button>}
                    </div>
                </div>
                {modal && (
                    <Modal title="" closeTheWindow={() => {
                        setModal(false);
                        dispatch({
                            type: INIT_NEW_CART,
                        });
                        dispatch({
                            type: CLOSE_ORDER,
                        });
                    }}>
                        <OrderDetails/>
                    </Modal>)}
            </>
        )
    }
}

