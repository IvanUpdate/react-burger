import React, {useEffect} from 'react';
import {Route, Switch, useLocation, useHistory} from 'react-router-dom';
import {useDispatch} from "react-redux";
import {getIngredients} from "../../services/actions/ingredients";
import styles from './App.module.css';
import AppHeader from '../app-header/app-header';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import {ProtectedRoute} from "../protected-route/protected-route";
import {NotFound404} from "../../pages/not-found";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import {Login} from "../../pages/login";
import {Register} from "../../pages/register";
import {ForgotPassword} from "../../pages/forgot-password";
import {ResetPassword} from "../../pages/reset-password";
import {Profile} from "../../pages/profile";
import {initNewCart} from "../../services/actions/burger-constructor";
import {IngredientPage} from "../../pages/ingredient";
import Modal from '../modal/modal';
import {deleteIngredient, initIngredient} from "../../services/actions/detailed-ingredient";
import {getUser} from "../../services/actions/auth";
import {LayoutCenterIngredient} from "../layout-center-ingredient/layout-center-ingredient";
import {Feed} from "../../pages/feed";
import {FeedId} from "../../pages/feed-id";
import {LayoutCenterFeedId} from "../order/feed-center";
import {LayoutCenterFeedIdHistory} from "../order/feed-center-history";
import {FeedIdHistory} from "../../pages/feed-id-history";


interface ILocationParams {
    pathname: string;
    state: {
        background: ILocationParams;
        from?: string;
    };
    from?: string;
    search: string;
    hash: string;
    key: string;
    background: ILocationParams;
}

function App() {

    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation<ILocationParams>();
    const background = location.state && location.state.background;


    useEffect(() => {
        dispatch(getIngredients());
        dispatch(initNewCart());
        dispatch(getUser());
        dispatch(initIngredient());
    }, [dispatch]);

    const closeIngredientInfo = () => {
        dispatch(deleteIngredient());
        history.replace('/');
    };

    const closeOrder = () => {
        history.replace({ pathname: location.state.from });
    };

    return (
        <div className={styles.App}>
            <AppHeader/>
            <Switch location={background || location}>
                <Route path='/' exact={true}>
                    <div className={styles.main}>
                        <DndProvider backend={HTML5Backend}>
                            <BurgerIngredients/>
                            <BurgerConstructor/>
                        </DndProvider>
                    </div>
                </Route>
                <Route path='/login' exact={true}>
                    <Login/>
                </Route>
                <Route path='/register' exact={true}>
                    <Register/>
                </Route>
                <Route path='/forgot-password' exact={true}>
                    <ForgotPassword/>
                </Route>
                <Route path='/reset-password' exact={true}>
                    <ResetPassword/>
                </Route>
                <ProtectedRoute path='/profile' exact={true}>
                    <Profile/>
                </ProtectedRoute>
                <Route path={'/ingredients/:id'} exact={true}>
                    <LayoutCenterIngredient/>
                </Route>
                <Route path={'/feed'} exact={true}>
                    <Feed/>
                </Route>
                <Route path={'/feed/:id'} exact={true}>
                    <LayoutCenterFeedId />
                </Route>
                <ProtectedRoute path='/profile/orders' exact={true}>
                    <Profile />
                </ProtectedRoute>
                <ProtectedRoute path={'/profile/orders/:id'} exact={true}>
                    <LayoutCenterFeedIdHistory />
                </ProtectedRoute>
                <Route>
                    <NotFound404/>
                </Route>
            </Switch>
            {background && <Route path='/ingredients/:id' children=
                {<Modal title='Детали ингредиента' closeTheWindow={() => {
                    closeIngredientInfo()
                }}>
                    <IngredientPage/>
                </Modal>}
            />}
            {background && location.state.from === '/feed' && <Route path='/feed/:id' children=
                {<Modal title='' closeTheWindow={() => {
                    closeOrder();
                }}>
                    <FeedId />
                </Modal>}
            />}
            {background && location.state.from === '/profile/orders' && <Route path='/profile/orders/:id' children=
                {<Modal title='' closeTheWindow={() => {
                    closeOrder();
                }}>
                    <FeedIdHistory />
                </Modal>}
            />}
        </div>
    );
}

export default App;
