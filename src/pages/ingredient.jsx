import React, {useEffect} from "react";
import { useParams } from 'react-router-dom';
import IngredientDetails from '../components/ingredient-details/ingredient-details';
import {useDispatch, useSelector} from "react-redux";
import {SET_INGREDIENT} from "../services/actions/detailed-ingredient";

export const IngredientPage = () => {

    const {id} = useParams();
    const dispatch = useDispatch();
    const item = useSelector((store) => store.ingredients.ingredients.find(el=>el._id===id));

    useEffect(()=>{
        console.log(item, id);
        if (item) {
            console.log(item)
            dispatch({
                type: SET_INGREDIENT,
                payload: item
            })
        }
    },[dispatch, item, id]);

    return (
        <div>
        {item ? <IngredientDetails /> : null }
        </div>
    )
};