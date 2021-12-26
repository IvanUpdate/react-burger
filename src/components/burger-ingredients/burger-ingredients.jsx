import React, {useRef, useState} from "react";
import {useSelector} from 'react-redux';
import burgerIngredientsStyle from './burger-ingredients.module.css';
import TabPoint from "./burger-tab/burger-tab";
import Ingredient from "./ingredient/ingredient";
import PropTypes from 'prop-types';
import shape from "../../utils/shape";
import {getTwoElementsDistant} from "../../services/get-twoelements-distant";


export default function BurgerIngredients() {

    const {ingredients, ingredientsFailed, ingredientsRequest} = useSelector(state => state.ingredients);
    const [current, setCurrent] = useState('bun');

    const buns = ingredients.filter(item => (item.type === 'bun'));
    const sauces = ingredients.filter(item => (item.type === 'sauce'));
    const mains = ingredients.filter(item => (item.type === 'main'));

    const burgerTopRef = useRef(null);
    const bunsRef = useRef(null);
    const saucesRef = useRef(null);
    const mainsRef = useRef(null);

    const handleScroll = () => {
        const bunsDistance = Math.abs(getTwoElementsDistant(burgerTopRef, bunsRef));
        const saucesDistance = Math.abs(getTwoElementsDistant(burgerTopRef, saucesRef));
        const mainsDistance = Math.abs(getTwoElementsDistant(burgerTopRef, mainsRef));
        const min = Math.min(bunsDistance, saucesDistance, mainsDistance);
        if (min === bunsDistance) {
            setCurrent('bun');
        } else if (min === saucesDistance) {
            setCurrent('sauce');
        } else {
            setCurrent('main')
        }
    };

    if (ingredientsFailed) {
        return <p>Произошла ошибка при получении данных</p>
    } else if (ingredientsRequest) {
        return <p>Загрузка...</p>
    } else {
        return (
            <div className={burgerIngredientsStyle.main + ' mr-10'} ref={burgerTopRef}>
                <h1 className={burgerIngredientsStyle.title + ' mt-10 mb-5'}>Соберите бургер</h1>
                <TabPoint current={current}/>
                <div className={burgerIngredientsStyle.scrollArea} onScroll={handleScroll}>
                    <h2 className={burgerIngredientsStyle.title2 + ' mt-10 mb-6'} ref={bunsRef}>Булки</h2>
                    <div className={burgerIngredientsStyle.content}>
                        {buns.map(item => {
                            return (<Ingredient item={item} key={item._id}/>)
                        })}
                    </div>
                    <h2 className={burgerIngredientsStyle.title2 + ' mt-10 mb-6'} ref={saucesRef}>Соусы</h2>
                    <div className={burgerIngredientsStyle.content}>
                        {sauces.map(item => {
                            return (<Ingredient item={item} key={item._id}/>)
                        })}
                    </div>
                    <h2 className={burgerIngredientsStyle.title2 + ' mt-10'} ref={mainsRef}>Начинки</h2>
                    <div className={burgerIngredientsStyle.content}>
                        {mains.map(item => {
                            return (<Ingredient item={item} key={item._id}/>);
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

BurgerIngredients.propTypes = {
    ingredientsFailed: PropTypes.bool,
    ingredientsRequest: PropTypes.bool,
    ingredients: PropTypes.arrayOf(PropTypes.shape(shape)),
};

