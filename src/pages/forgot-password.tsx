import React, {useState, useEffect} from "react";
import {Link, Redirect, useHistory} from "react-router-dom";
import styles from './forgot-password.module.css';
import {EmailInput, Button} from "@ya.praktikum/react-developer-burger-ui-components";
import {useDispatch, useSelector} from "../services/hooks";
import {resetPassword} from "../services/actions/auth";

export const ForgotPassword = () => {

    const history = useHistory();
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const isLogin = useSelector((store:any) => store.auth.isLogin);
    const isReset = useSelector((store:any) => store.auth.resetPasswordApproved);

    const reset = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(resetPassword({email}));
    };

    useEffect(() => {
        if (isReset) {
            history.replace({pathname: "/reset-password", state: history.location});
        }
    }, [email, isReset]);

    if (isLogin) {
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
            <h1 className={styles.title + ' mb-6'}>Восстановление пароля</h1>
            <form className={styles.inputs} onSubmit={reset}>
                <EmailInput value={email} name='email' onChange={(e) => {
                    setEmail(e.target.value);
                }} size="default"/>
                <Button type='primary' size='medium'>Восстановить</Button>
            </form>
            <div className={styles.links + ' mt-20'}>
                <div>
                    <span className={styles.question}>Вспомнили пароль? </span>
                    <Link to='/login' className={styles.linkto}>Войти</Link>
                </div>
            </div>
        </div>
    )
};