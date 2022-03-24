import React from "react"
import {useSelector} from "react-redux";
import ingredientStyles from './ingredient.details.module.css';

const IngredientDetails = () => {
    const item = useSelector((state: any) => state.ingredient.item);

    return (item &&
        <div className={ingredientStyles.main}>
            <img className={ingredientStyles.image} src={item.image} alt=''/>
            <div className={ingredientStyles.name+ ' mt-4'}>{item.name}</div>
            <div className={ingredientStyles.ingredients + ' mt-8 mb-15'}>
                <ul>
                    <li><span className={ingredientStyles.type}>Калории,ккал</span><span
                        className={ingredientStyles.value}>{item.calories}</span></li>
                    <li><span className={ingredientStyles.type}>Белки, г</span><span
                        className={ingredientStyles.value}>{item.proteins}</span></li>
                    <li><span className={ingredientStyles.type}>Жиры, г</span><span
                        className={ingredientStyles.value}>{item.fat}</span></li>
                    <li><span className={ingredientStyles.type}>Углеводы, г</span><span
                        className={ingredientStyles.value}>{item.carbohydrates}</span></li>
                </ul>
            </div>

        </div>
    )
};

export default IngredientDetails;
