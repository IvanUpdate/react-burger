import { Route, Redirect } from 'react-router-dom';
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import { getUser } from "../../services/actions/auth";


export function ProtectedRoute({children, ...rest}) {

    const dispatch = useDispatch();
    const [isUserLoaded, setUserLoaded] = useState(false);
    const user = useSelector((store)=> store.auth.user);

    const init = async () => {
        await getUser();
        setUserLoaded(true);
    };

    useEffect(()=>{
        init();
    },[dispatch]);

    if (!isUserLoaded) {
        return null;
    }

    return (
        <Route
            {...rest}
            render={() =>
                user ? (
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