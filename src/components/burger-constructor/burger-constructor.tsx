import React from "react";
import burgerConstructorStyles from './burger-constructor.module.css';
import { ConstructorElement, DragIcon, CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import data from '../../utils/data';

export default class BurgerConstructor extends React.Component {

    name = (<div className={burgerConstructorStyles.title}>
        data[0].name
    </div>);

    render() {
        return (
            <div className={burgerConstructorStyles.main + ' pt-25'}>
                {data.map((item) => {
                    return (
                        <div className='mt-4 ml-4'>
                            <DragIcon type="primary" />
                            <ConstructorElement text={item.name} price={item.price} thumbnail={item.image} />
                        </div>
                    )
                })}
                <div className={burgerConstructorStyles.total + ' mt-10'}>
                    <span className={burgerConstructorStyles.price + ' mr-10'}>610<CurrencyIcon type="primary" /></span>
                    <Button type="primary" size="medium">
                        Оформить заказ
                    </Button>
                </div>
            </div>
        )
    }
}