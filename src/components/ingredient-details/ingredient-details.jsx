import React from "react"
import {useSelector} from "react-redux";
import ingredientStyles from './ingredient.details.module.css';

const IngredientDetails = () => {
    const {name, image, calories, proteins, fat, carbohydrates} = useSelector(state => state.ingredient.item);

    return (
        <div className={ingredientStyles.main}>
            <img className={ingredientStyles.image + ' ml-25'} src={image} alt=''/>
            <div className={ingredientStyles.name + ' mt-4'}>{name}</div>
            <div className={ingredientStyles.ingredients + ' mt-8 ml-25 mb-15'}>
                <ul>
                    <li><span className={ingredientStyles.type}>Калории,ккал</span><span
                        className={ingredientStyles.value}>{calories}</span></li>
                    <li><span className={ingredientStyles.type}>Белки, г</span><span
                        className={ingredientStyles.value}>{proteins}</span></li>
                    <li><span className={ingredientStyles.type}>Жиры, г</span><span
                        className={ingredientStyles.value}>{fat}</span></li>
                    <li><span className={ingredientStyles.type}>Углеводы, г</span><span
                        className={ingredientStyles.value}>{carbohydrates}</span></li>
                </ul>
            </div>

        </div>
    )
}

export default IngredientDetails;
