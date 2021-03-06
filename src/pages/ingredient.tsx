import React, {useEffect} from "react";
import {useParams} from 'react-router-dom';
import IngredientDetails from '../components/ingredient-details/ingredient-details';
import {useDispatch, useSelector} from "../services/hooks";
import {SET_INGREDIENT} from "../services/constants";
import {TItem} from "../types";

export const IngredientPage = () => {

    const {id} = useParams<{id?:string}>();
    const dispatch = useDispatch();
    const item = useSelector(store => store.ingredients.ingredients.find((el:TItem) => el._id === id));

    const setElement = () => {
        dispatch({
            type: SET_INGREDIENT,
            payload: item
        })
    };

    useEffect(() => {
        console.log(item, id);
        setElement();
        if (item) {
            setElement();
        }
    }, [dispatch, item, id]);

    return (
        <div>
            {item ? <IngredientDetails/> : null}
        </div>
    )
};