import React, { useState } from "react";
import burgerConstructorStyles from './burger-constructor.module.css';
import { ConstructorElement, DragIcon, CurrencyIcon, Button, LockIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import Modal from "../modal/modal";
import OrderDetails from '../order-details/order-details';
import shape from "../../utils/shape";

export default function BurgerConstructor (props){

    const [modal, setModal] = useState(false);

    const img = 'https://code.s3.yandex.net/react/code/bun-02-mobile.png';

    const switchModal = () => {
        setModal(!modal)
    };

    return (
        <>
        <div className={burgerConstructorStyles.main + ' pt-25'}>
            <div className='mt-4 ml-6'>
                <ConstructorElement text="Краторная булка N-200i (верх)" price={200} thumbnail={img} isLocked={true} type='top'  />
            </div>
            <div className={burgerConstructorStyles.scrollArea}>
            {props.data.filter(item=>item.type!=='bun').map((item, index) => {
                    return (
                        <div className={burgerConstructorStyles.item + "  mt-4 mr-8"} key={item._id+index}>
                            <DragIcon type="primary" />
                            <ConstructorElement text={item.name} price={item.price} thumbnail={item.image} />
                        </div>
                    )
                })}
            </div>
            <div className='mt-4 ml-6'>
                <ConstructorElement text="Краторная булка N-200i (низ)" price={200} thumbnail={img} isLocked={true} type='bottom'  />
            </div>
            <div className={burgerConstructorStyles.total + ' mt-10'}>
                <span className={burgerConstructorStyles.price + ' mr-10'}>610<CurrencyIcon type="primary" /></span>
                <Button type="primary" size="medium" onClick={switchModal}>
                    Оформить заказ
                </Button>
            </div>
            
        </div>
        {modal && (
            <Modal title="" closeTheWindow={() => setModal(false)}>
                <OrderDetails value='034536' />
            </Modal>)}
        </>
    )
        }

BurgerConstructor.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape(shape)).isRequired,
};