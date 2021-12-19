import React, {useState, useEffect} from 'react';
import appstyles from './App.module.css';
import AppHeader from '../app-header/app-header';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import {DataContext} from '../../services/appContext';
import {OrderContext} from "../../services/orderContext";

const API_URL = 'https://norma.nomoreparties.space/api/';

function App() {


    const [data, setData] = useState({
        data: [],
    });

    const orderInitialState = {sum: 0};
    const [orderState, dispatchOrderState] = React.useReducer(reducer, orderInitialState, undefined)

    function reducer(state, action) {
        switch(action.type) {
            case 'INCREMENT':
                return {
                    ...state,
                    [action.name] : state[action.name] + action.payload,
                };
            case 'DECREMENT':
                return {
                    ...state,
                    [action.name] : state[action.name] - action.payload,
                };
            default:
                return state;

        }
    };

    useEffect(() => {
        const getDate = async () => {
            try {
                const response = await fetch(API_URL + 'ingredients');
                if (!response.ok) {
                    throw new Error('Запрос не успешен!');
                }
                const data = await response.json();
                setData(data);
            } catch (error) {
                console.error("Ошибка:", error);
            }
        }
        getDate();
    }, []);


    return (
        <div className={appstyles.App} id='modals'>
            <AppHeader/>
            <div className={appstyles.main}>
                <BurgerIngredients data={data.data}/>
                <DataContext.Provider value={{data, setData}}>
                    <OrderContext.Provider value={{orderState, dispatchOrderState}}>
                        <BurgerConstructor/>
                    </ OrderContext.Provider>
                </DataContext.Provider>
            </div>
        </div>
    );
}

export default App;
