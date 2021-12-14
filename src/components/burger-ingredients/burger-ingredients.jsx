import React from "react";
import burgerIngredients from './burger-ingredients.module.css';
import TabPoint from "./burger-tab/burger-tab";
import Ingredient from "./ingredient/ingredient";
import PropTypes from 'prop-types';
import shape from "../../utils/shape";


export default function BurgerIngredients(props) {

    const buns = props.data.filter(item=>(item.type === 'bun'));
    const sauses = props.data.filter(item=>(item.type === 'sauce'));
    const mains = props.data.filter(item=>(item.type === 'main'));

    return (
        <div className={burgerIngredients.main + ' mr-10'}>
            <h1 className={burgerIngredients.title + ' mt-10 mb-5'}>Соберите бургер</h1>
            <TabPoint />
            <div className={burgerIngredients.scrollArea}>
                <h2 className={burgerIngredients.title2 + ' mt-10 mb-6'}>Булки</h2>
                <div className={burgerIngredients.content}>
                    {buns.map(item => {
                            return (<Ingredient item={item} key={item._id}/>)
                    })}
                </div>
                <h2 className={burgerIngredients.title2 + ' mt-10 mb-6'}>Соусы</h2>
                <div className={burgerIngredients.content}>
                    {sauses.map(item => {
                            return (<Ingredient item={item} key={item._id}/>)
                    })}
                </div>
                <h2 className={burgerIngredients.title2 + ' mt-10'}>Начинки</h2>
                <div className={burgerIngredients.content}>
                    {mains.map(item => {
                            return (<Ingredient item={item} key={item._id}/>);
                    })}
                </div>
            </div>
        </div>
    )
}

BurgerIngredients.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape(shape)).isRequired,
};

