import React, {useState, useContext, useEffect, useMemo} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useDrop} from "react-dnd";
import burgerConstructorStyles from './burger-constructor.module.css';
import {
    CurrencyIcon,
    Button,
} from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import Modal from "../modal/modal";
import OrderDetails from '../order-details/order-details';
import BurgerIngredient from "./burger-constructor-ingredient/burger-constructor-ingredient";
import shape from "../../utils/shape";
import {getOrder} from "../../services/actions/order-details";
import {
    ADD_ITEM,
    INIT_NEW_CART,
    ADD_BUN,
    REMOVE_BUN
} from "../../services/actions/burger-constructor";

export default function BurgerConstructor() {

    const dispatch = useDispatch();
    const orderIngredients = useSelector(state => state.constructor.ingredients);
    const count = useSelector(state => state.constructor.count);
    const [modal, setModal] = useState(false);
    const price = useSelector(state => state.constructor.totalPrice);
    const bunsArray = useSelector(state => state.constructor.bunsArray);

    useEffect(() => {
        dispatch({
            type: INIT_NEW_CART,
        });
    }, []);

    const onDropHandler = (itemId) => {
        if (itemId.type === 'bun') {
            if (bunsArray.length === 2) {
                dispatch({
                    type: REMOVE_BUN,
                    payload: itemId
                });
            }
            dispatch({
                type: ADD_BUN,
                payload: itemId
            });
        } else {
            dispatch({
                type: ADD_ITEM,
                payload: itemId
            });
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
        setModal(!modal)
    };

    const handleOrder = (ingr) => {
        dispatch(getOrder(ingr));
    };
    if (!count) {
        return (<h1 ref={dropTargetFirst} className={burgerConstructorStyles.header}>Начните перетаскивать ингредиенты
            сюда</h1>);
    } else {
        return (
            <>
                <div className={burgerConstructorStyles.main + ' pt-25'} ref={dropTarget}>
                    {bunsArray[0] && <BurgerIngredient item={bunsArray[0]} key={1} layout='top'/>}
                    <div className={burgerConstructorStyles.scrollArea} ref={drop}>
                        {orderIngredients && orderIngredients.map((item, index) => {
                            if (item.type !== 'bun') {
                                return (
                                    <BurgerIngredient item={item} key={index} index={index}/>
                                )
                            }
                        })}
                    </div>
                    {bunsArray[1] && <BurgerIngredient item={bunsArray[1]} key={2} layout='bottom'/>}
                    <div className={burgerConstructorStyles.total + ' mt-10'}>
                        <span className={burgerConstructorStyles.price + ' mr-10'}>{price}<CurrencyIcon
                            type="primary"/></span>
                        <Button type="primary" size="medium" onClick={() => {
                            handleOrder([...orderIngredients, ...bunsArray]);
                            switchModal();
                        }}>
                            Оформить заказ
                        </Button>
                    </div>
                </div>
                {modal && (
                    <Modal title="" closeTheWindow={() => {setModal(false);
                        dispatch({
                            type: INIT_NEW_CART,
                        });}}>
                        <OrderDetails/>
                    </Modal>)}
            </>
        )
    }
}

BurgerConstructor.propTypes = {
    orderIngredients: PropTypes.arrayOf(PropTypes.shape(shape)).isRequired,
};