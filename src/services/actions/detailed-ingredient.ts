export const SET_INGREDIENT = 'SET_INGREDIENT';
export const DELETE_INGREDIENT = 'DELETE_INGREDIENT';
export const INIT_INGREDIENT = 'INIT_INGREDIENT';

export const deleteIngredient = () => {
    return (
        {
            type: DELETE_INGREDIENT,
        }
    )
};

export const initIngredient = () => {
    return (
        {
            type: INIT_INGREDIENT,
        }
    )
};


