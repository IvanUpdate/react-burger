import {API_URL} from '../../components/app/App';

export const GET_INGREDIENTS = 'GET_INGREDIENTS';
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_ERROR = 'GET_INGREDIENTS_ERROR';

export function getIngredients() {
    return function (dispatch) {
        dispatch({
            type: GET_INGREDIENTS
        });
        fetch(API_URL + 'ingredients').then(res => {
            if (res && res.ok) {
                return res.json();
            } else {
                dispatch({
                    type: GET_INGREDIENTS_ERROR
                })
            }
        }).then(res => {
                dispatch({
                    type: GET_INGREDIENTS_SUCCESS,
                    ingredients: res.data
                });
            }
        ).catch(err => {
            dispatch({
                type: GET_INGREDIENTS_ERROR
            })
        })
    }
}