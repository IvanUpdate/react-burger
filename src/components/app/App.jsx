import React, {useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {useDispatch} from "react-redux";
import {getIngredients} from "../../services/actions/ingredients";
import appstyles from './App.module.css';
import AppHeader from '../app-header/app-header';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import { NotFound404 } from "../../pages/not-found";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import {Login} from "../../pages/login";
import {Register} from "../../pages/register";
import {ForgotPassword} from "../../pages/forgot-password";
import { ResetPassword } from "../../pages/reset-password";
import {Profile} from "../../pages/profile";

export const API_URL = 'https://norma.nomoreparties.space/api/';

function App() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getIngredients())
    }, []);

    return (
        <div className={appstyles.App}>
            <Router>
                <AppHeader/>
                <Switch>
                    <Route path='/' exact = {true} >
                        <div className={appstyles.main}>
                            <DndProvider backend={HTML5Backend}>
                                <BurgerIngredients/>
                                <BurgerConstructor/>
                            </DndProvider>
                        </div>
                    </Route>
                    <Route path='/login'>
                        <Login/>
                    </Route>
                    <Route path='/register'>
                        <Register />
                    </Route>
                    <Route path='/forgot-password'>
                        <ForgotPassword />
                    </Route>
                    <Route path='/reset-password'>
                        <ResetPassword/>
                    </Route>
                    <Route path='/profile'>
                        <Profile />
                    </Route>
                    <Route path='/ingredients/:id'>
                        ingredients
                    </Route>
                    <Route>
                        <NotFound404 />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
