import React from "react";
import { CurrencyIcon, Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import ingredientStyles from './ingredient.module.css';
import PropTypes from 'prop-types';

function Ingredient(props) {
    
    return (
        <div className = { ingredientStyles.card+' mr-2 ml-4 mb-8' }>
            <div className = { ingredientStyles.counter }><Counter count={1} size="default" /></div>
            <img src= {props.image} alt='' className = { ingredientStyles.image+' mr-4 ml-4' }/>
            <div className= { ingredientStyles.currencyBlock+' pt-1 pb-1'}>
            <span className= { ingredientStyles.price+' mr-2' }>20</span>
            <span className = { ingredientStyles.currency }><CurrencyIcon type="primary" /></span>
            </div>
            <div className= { ingredientStyles.name }>
                <span>{props.name}</span>
            </div>
        </div>
    );
}

export default Ingredient;

Ingredient.propTypes = { 
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
