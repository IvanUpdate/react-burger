import React, {useState, useEffect } from "react";
import {Link, Redirect, useHistory} from "react-router-dom";
import styles from './forgot-password.module.css';
import {EmailInput, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import {useDispatch, useSelector} from "react-redux";
import {resetPassword} from "../services/actions/auth";

export const ForgotPassword = () => {

    const history = useHistory();

    const [email, setEmail] = useState('');
    const user = useSelector((store)=>store.auth.user);
    const isReset = useSelector((store) => store.auth.resetPasswordApproved);

    const dispatch = useDispatch();

    const reset = (e) => {
        e.preventDefault();
        dispatch(resetPassword(email));
    };

    useEffect(()=>{
        if (isReset) {
                history.replace({ pathname: "/reset-password", state: history.location });
        }
    },[email, isReset]);

    if (user) {
        return (
            <Redirect
                to={{
                    pathname: '/'
                }}
            />
        );
    }

    return (
        <div className={styles.main}>
            <h1 className={styles.title+ ' mb-6'}>Восстановление пароля</h1>
            <div className={styles.inputs}>
                <EmailInput value={email} name='email' onChange={(e) => {setEmail(e.target.value);
                }} size="default"/>
                <Button type='primary' size='medium' onClick={reset}>Восстановить</Button>
            </div>
            <div className={styles.links+ ' mt-20'}>
                <div>
                    <span className={styles.question}>Вспомнили пароль? </span>
                    <Link to='/login' className={styles.linkto}>Войти</Link>
                </div>
            </div>
        </div>
    )
};