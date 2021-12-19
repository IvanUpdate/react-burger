import React, { useState, useContext, useEffect, useMemo } from "react";
import burgerConstructorStyles from './burger-constructor.module.css';
import { ConstructorElement, DragIcon, CurrencyIcon, Button, LockIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import Modal from "../modal/modal";
import OrderDetails from '../order-details/order-details';
import shape from "../../utils/shape";
import {DataContext} from "../../services/appContext";
import {OrderContext} from "../../services/orderContext";

const API_POINT = 'https://norma.nomoreparties.space/api/';

export default function BurgerConstructor (){

    const { data } = useContext(DataContext);
    const [modal, setModal] = useState(false);
    const [orderNumber, setOrderNumber] = useState({order:{number:65237}});
    const {orderState, dispatchOrderState} = useContext(OrderContext);


    const ingredientsArray = data.data.map(el=>el._id);


    const ingredientsData = data.data.filter(item=>item.type!=='bun');
    const bun = useMemo(() => (data.data.find((el) => el.type === "bun")));


    useEffect(()=>{
        data.data.map(item=>(dispatchOrderState({type: 'INCREMENT', name:'sum', payload: item.price})));
        },[data]);

    const Bun = ({ name, image, price, _id, layout}) => {

        return(
            <div className='mt-4 ml-8' key={_id}>
                <ConstructorElement
                    type = {layout}
                    text={name}
                    price={price}
                    thumbnail={image}
                    isLocked={true}/>
            </div>
        );
    };

    const switchModal = () => {
        setModal(!modal)
    };

    const getOrderNumber = () => {

        try {

            const response = fetch(API_POINT + 'orders', {
                method: 'POST',
                headers: API_POINT.headers,
                body: JSON.stringify({
                    ingredients: ingredientsArray
                })
            });
            console.log(ingredientsArray);
            if (!response.ok) {
                throw new Error('Запрос не успешен!');
            }
            const orderDetail = response.json();
            setOrderNumber(orderDetail);
        } catch (error) {
            console.error("Ошибка:", error);
        }
    }

    return (
        <>
        <div className={burgerConstructorStyles.main + ' pt-25'}>
            <Bun {...bun} layout='top' />
            <div className={burgerConstructorStyles.scrollArea}>
            {ingredientsData.map((item, index) => {
                    return (
                        <div className={burgerConstructorStyles.item + "  mt-4 mr-8"} key={item._id+index}>
                            <DragIcon type="primary" />
                            <ConstructorElement text={item.name} price={item.price} thumbnail={item.image} />
                        </div>
                    )
                })}
            </div>
            <Bun layout='bottom' {...bun}/>
            <div className={burgerConstructorStyles.total + ' mt-10'}>
                <span className={burgerConstructorStyles.price + ' mr-10'}>{orderState.sum}<CurrencyIcon type="primary" /></span>
                <Button type="primary" size="medium" onClick={()=>{
                    getOrderNumber();
                    switchModal();
                }}>
                    Оформить заказ
                </Button>
            </div>

        </div>
        {modal && (
            <Modal title="" closeTheWindow={() => setModal(false)}>
                <OrderDetails value={orderNumber.order.number} />
            </Modal>)}
        </>
    )
        }

BurgerConstructor.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape(shape)).isRequired,
};