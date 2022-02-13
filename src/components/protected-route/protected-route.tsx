import React, {FC} from "react";
import { Route, Redirect, useLocation } from 'react-router-dom';
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import { getUser } from "../../services/actions/auth";

interface IProtectedRoute {
    path: string;
    exact?: boolean;
    rest?: any;
}

export const  ProtectedRoute: FC<IProtectedRoute> =({children, ...rest}) => {

    const dispatch = useDispatch();
    const location = useLocation();
    const [isUserLoaded, setUserLoaded] = useState(false);
    const isLogin = useSelector((store:any)=> store.auth.isLogin);

    const init = async () => {
        await getUser();
        setUserLoaded(true);
    };

    useEffect(()=>{
        init();
        console.log('start');
    },[dispatch]);

    if (!isUserLoaded) {
        return null;
    }

    return (
        <Route
            {...rest}
            render={() =>
                isLogin ? (
                    children
                ) : (
                    <Redirect to={{
                        pathname: '/login',
                        state: { from: location }
                    }} />
                )
            }
        />
    );

};