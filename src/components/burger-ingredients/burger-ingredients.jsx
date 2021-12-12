import React from "react";
import burgerIngredients from './burger-ingredients.module.css';
import TabPoint from "./burger-tab/burger-tab";
import Ingredient from "./ingredient/ingredient";
import PropTypes from 'prop-types';


export default function BurgerIngredients(props) {

    return (
        <div className={burgerIngredients.main + ' mr-10'}>
            <h1 className={burgerIngredients.title + ' mt-10 mb-5'}>Соберите бургер</h1>
            <TabPoint />
            <div className={burgerIngredients.scrollArea}>
                <h2 className={burgerIngredients.title2 + ' mt-10 mb-6'}>Булки</h2>
                <div className={burgerIngredients.content}>
                    {props.data.map(item => {
                        if (item.type === 'bun') {
                            return (<Ingredient item={item} key={item._id}/>)
                        }
                    })}
                </div>
                <h2 className={burgerIngredients.title2 + ' mt-10 mb-6'}>Соусы</h2>
                <div className={burgerIngredients.content}>
                    {props.data.map(item => {
                        if (item.type === 'sauce') {
                            return (<Ingredient item={item} key={item._id}/>)
                        }
                    })}
                </div>
                <h2 className={burgerIngredients.title2 + ' mt-10'}>Начинки</h2>
                <div className={burgerIngredients.content}>
                    {props.data.map(item => {
                        if (item.type === 'main') {
                            return (<Ingredient item={item} key={item._id}/>);
                        }
                    })}
                </div>
            </div>
        </div>
    )
}

BurgerIngredients.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
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

