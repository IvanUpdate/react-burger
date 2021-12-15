import React from "react"
import ingredientStyles from './ingredient.details.module.css'
import PropTypes from 'prop-types';
import shape from "../../utils/shape";

const IngredientDetails = (props) => {

    const item = props.item;
    return (
        <div className={ingredientStyles.main}>
            <img className={ingredientStyles.image+' ml-25'} src={item.image} alt=''/>
            <div className={ingredientStyles.name+' mt-4'}>{item.name}</div>
            <div className={ingredientStyles.ingridients+' mt-8 ml-25 mb-15'}>
                <ul>
                    <li><span className={ingredientStyles.type}>Калории,ккал</span><span className={ingredientStyles.value}>{item.calories}</span></li>
                    <li><span className={ingredientStyles.type}>Белки, г</span><span className={ingredientStyles.value}>{item.proteins}</span></li>
                    <li><span className={ingredientStyles.type}>Жиры, г</span><span className={ingredientStyles.value}>{item.fat}</span></li>
                    <li><span className={ingredientStyles.type}>Углеводы, г</span><span className={ingredientStyles.value}>{item.carbohydrates}</span></li>
                </ul>
            </div>

        </div>
    )
}

export default IngredientDetails;

  IngredientDetails.propTypes = { 
    item: PropTypes.shape(shape).isRequired
  };