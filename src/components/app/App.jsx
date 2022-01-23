import React, {useEffect} from 'react';
import { Route, Switch, useLocation, useHistory } from 'react-router-dom';
import {useDispatch} from "react-redux";
import {getIngredients} from "../../services/actions/ingredients";
import appstyles from './App.module.css';
import AppHeader from '../app-header/app-header';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import {ProtectedRoute} from "../protected-route/protected-route";
import { NotFound404 } from "../../pages/not-found";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import {Login} from "../../pages/login";
import {Register} from "../../pages/register";
import {ForgotPassword} from "../../pages/forgot-password";
import { ResetPassword } from "../../pages/reset-password";
import {Profile} from "../../pages/profile";
import {INIT_NEW_CART} from "../../services/actions/burger-constructor";
import {IngredientPage} from "../../pages/ingredient";
import Modal from '../modal/modal';
import {DELETE_INGREDIENT} from "../../services/actions/detailed-ingredient";

export const API_URL = 'https://norma.nomoreparties.space/api/';

function App() {

    const dispatch = useDispatch();

    let location = useLocation();
    const history = useHistory();
    let background = location.state && location.state.background;


    useEffect(() => {
        dispatch(getIngredients());
        dispatch({
            type: INIT_NEW_CART,
        });
    }, [dispatch]);

    const closeIngredientInfo = () =>{
            dispatch({
                type: DELETE_INGREDIENT,
            });
            history.replace('/');
    };

    /*useEffect(() => {
        if (localStorage.getItem('token')) {
            checkAuth();
        }
    }, []);*/

    return (
        <div className={appstyles.App}>
                <AppHeader/>
                <Switch location={background || location}>
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
                    <ProtectedRoute path='/profile'>
                        <Profile />
                    </ProtectedRoute>
                    <Route path={'/ingredients/:id'} exact={true}>
                        <IngredientPage />
                    </Route>
                    <Route>
                        <NotFound404 />
                    </Route>
                </Switch>
                {background && <Route path='/ingredients/:id' children=
                    {<Modal closeTheWindow={() => {
                        closeIngredientInfo()
                }}>
                    <IngredientPage/>
                </Modal>}
                />}
        </div>
    );
}

export default App;
