import React from "react";
import burgerIngredients from './burger-ingredients.module.css';
import TabPoint from "./burger-tab/burger-tab";
import Ingredient from "./ingredient/ingredient";
import data from '../../utils/data';


export default class BurgerIngredients extends React.Component {


    render() {
        return (
            <div className={burgerIngredients.main+' mr-10'}>
                <h1 className={burgerIngredients.title + ' mt-10 mb-5'}>Соберите бургер</h1>
                <TabPoint /> 
                <h2 className={burgerIngredients.title2 + ' mt-10 mb-6'}>Булки</h2>
                <div className = {burgerIngredients.content}>
                { data.map( item => {
                    if (item.type === 'bun') {
                        return (<Ingredient image = { item.image } />)
                    }
                })}
                </div> 
                <h2 className={burgerIngredients.title2 + ' mt-10 mb-6'}>Соусы</h2>
                <div className = {burgerIngredients.content}>
                { data.map( item => {
                    if (item.type === 'sauce') {
                        return (<Ingredient image = { item.image } />)
                    }
                })}
                </div>
                <h2 className={burgerIngredients.title2 + ' mt-10'}>Начинки</h2> 
                <div className = {burgerIngredients.content}>
                { data.map( item => {
                    if (item.type === 'main') {
                        return (<Ingredient image = { item.image } />);
                    }
                })}
                </div>
            </div>
        )
    }
}