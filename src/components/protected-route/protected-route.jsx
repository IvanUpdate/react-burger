import React from "react";
import { Route, Redirect } from 'react-router-dom';
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import { getUser } from "../../services/actions/auth";


export function ProtectedRoute({children, ...rest}) {

    const dispatch = useDispatch();
    const [isUserLoaded, setUserLoaded] = useState(false);
    const isLogin = useSelector((store)=> store.auth.isLogin);

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
                    <Redirect
                        to='/login'
                    />
                )
            }
        />
    );

}