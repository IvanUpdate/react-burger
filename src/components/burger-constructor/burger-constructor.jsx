import React from "react";
import burgerConstructorStyles from './burger-constructor.module.css';
import { ConstructorElement, DragIcon, CurrencyIcon, Button, LockIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';

export default class BurgerConstructor extends React.Component {

    constructor(props){
        super(props);
        this.data = props.data;
    }

    render() {
        return (
            <div className={burgerConstructorStyles.main + ' pt-25'}>
                <div className='mt-4 ml-8'>
                            <ConstructorElement text={this.data[0].name} price={this.data[0].price} thumbnail={this.data[0].image} isLocked={true} type='top'/>
                </div>
                <div className={burgerConstructorStyles.scrollArea}>
                {this.data.map((item) => {
                    return (
                        <div className={burgerConstructorStyles.item+"  mt-4 mr-8"} key={item.id}>
                            <DragIcon type="primary" />
                            <ConstructorElement text={item.name} price={item.price} thumbnail={item.image} />
                           
                        </div>
                    )
                })}
                </div>
                <div className='mt-4 ml-8'>
                            <ConstructorElement text={this.data[0].name} price={this.data[0].price} thumbnail={this.data[0].image} isLocked={true} type='bottom'/>
                </div>
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

BurgerConstructor.propTypes = { 
    constructor: PropTypes.arrayOf(PropTypes.shape({  
      _id: PropTypes.string,
      name: PropTypes.string,
      type: PropTypes.string,
      proteins: PropTypes.number,
      fat: PropTypes.number,
      carbohydrates: PropTypes.number,
      calories: PropTypes.number,
      price: PropTypes.number,
      image: PropTypes.string,
      image_mobile: PropTypes.string,
      image_large: PropTypes.string,
      __v: PropTypes.number
    })).isRequired,
  };