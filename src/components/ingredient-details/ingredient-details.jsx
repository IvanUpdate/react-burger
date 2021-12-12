import React from "react"
import ingredientStyles from './ingredient.details.module.css'
import PropTypes from 'prop-types';

const IngredientDetails = (props) => {

    const item = props.item;
    return (
        <div className={ingredientStyles.main}>
            <img className={ingredientStyles.image+' ml-25'} src={item.image} alt=''/>
            <div className={ingredientStyles.name+' mt-4'}>{item.name}</div>
            <div className={ingredientStyles.ingridients+' mt-8 ml-25'}>
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
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      proteins: PropTypes.number.isRequired,
      fat: PropTypes.number.isRequired,
      carbohydrates: PropTypes.number.isRequired,
      calories: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      image_mobile: PropTypes.string.isRequired,
      image_large: PropTypes.string.isRequired,
      __v: PropTypes.number.isRequired,
  };