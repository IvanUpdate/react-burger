import React, {useState, useEffect} from 'react';
import {useDispatch} from "react-redux";
import {getIngredients} from "../../services/actions/ingredients";
import appstyles from './App.module.css';
import AppHeader from '../app-header/app-header';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";

export const API_URL = 'https://norma.nomoreparties.space/api/';

function App() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getIngredients())
    }, []);

    return (
        <div className={appstyles.App} id='modals'>
            <AppHeader/>
            <div className={appstyles.main}>
                <DndProvider backend={HTML5Backend}>
                    <BurgerIngredients/>
                    <BurgerConstructor/>
                </DndProvider>
            </div>
        </div>
    );
}

export default App;
