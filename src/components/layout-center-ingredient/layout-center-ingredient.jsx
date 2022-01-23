import React from "react";
import {IngredientPage} from "../../pages/ingredient";
import styles from './layout-center-ingredient.module.css';

export const LayoutCenterIngredient = () => {
    return (
        <div className={styles.main}>
        <h1 className={styles.title}>Детали ингредиента</h1>
            <IngredientPage/>
        </div>
    )
};