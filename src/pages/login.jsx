import React, {useEffect, useState} from "react";
import {Link, useHistory, Redirect} from "react-router-dom";
import styles from './login.module.css';
import {EmailInput, PasswordInput, Button} from "@ya.praktikum/react-developer-burger-ui-components";
import {useDispatch, useSelector} from "react-redux";
import {loginRequest} from "../services/actions/auth";

export const Login = () => {

    const history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const user = useSelector((store)=>store.auth.user);

    const dispatch = useDispatch();

    const login = (e) => {
        e.preventDefault();
        dispatch(loginRequest(email, password));
        console.log('aferlogin');
    };

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
            <h1 className={styles.title + ' mb-6'}>Вход</h1>
            <div className={styles.inputs}>
                <EmailInput value={email} name='email' onChange={(e) => {setEmail(e.target.value);
                }} size="default"/>
                <PasswordInput value={password} name='password' onChange={(e) => {setPassword(e.target.value)}}/>
                <Button type='primary' size='medium' onClick={login}>Войти</Button>
            </div>
            <div className={styles.links+ ' mt-20'}>
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