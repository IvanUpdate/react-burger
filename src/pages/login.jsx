import React, {useState} from "react";
import {Link, Redirect, useHistory} from "react-router-dom";
import styles from './login.module.css';
import {EmailInput, PasswordInput, Button} from "@ya.praktikum/react-developer-burger-ui-components";
import {useDispatch, useSelector} from "react-redux";
import {loginRequest} from "../services/actions/auth";

export const Login = () => {

    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const isLogin = useSelector((store) => store.auth.isLogin);

    const dispatch = useDispatch();

    const login = (e) => {
        e.preventDefault();
        dispatch(loginRequest(email, password));
    };

    if (isLogin) {
        console.log(history.location);
        return (
            <Redirect
                to={history.location.state?.from.pathname || './'}
            />
        );
    }

    return (
        <div className={styles.main}>
            <form onSubmit={login}>
                <h1 className={styles.title + ' mb-6'}>Вход</h1>
                <div className={styles.inputs}>
                    <EmailInput value={email} name='email' onChange={(e) => {
                        setEmail(e.target.value);
                    }} size="default"/>
                    <PasswordInput value={password} name='password' onChange={(e) => {
                        setPassword(e.target.value)
                    }}/>
                    <Button type='primary' size='medium'>Войти</Button>
                </div>
            </form>
            <div className={styles.links + ' mt-20'}>
                <div>
                    <span className={styles.question}>Вы - новый пользователь? </span>
                    <Link to='/register' className={styles.linkto}>Зарегистрироваться</Link>
                </div>
                <div>
                    <span className={styles.question}>Забыли пароль? </span>
                    <Link to='/forgot-password' className={styles.linkto}>Восстановить пароль</Link>
                </div>
            </div>
        </div>
    )
};