import React from "react";
import {Link} from "react-router-dom";
import styles from './login.module.css';
import {EmailInput, PasswordInput, Button} from "@ya.praktikum/react-developer-burger-ui-components";

export const Login = () => {


    return (
        <div className={styles.main}>
            <h1 className={styles.title + ' mb-6'}>Вход</h1>
            <div className={styles.inputs}>
                <EmailInput value={''} name='email' onChange={() => {
                }} size="default"/>
                <PasswordInput value={''} name='password' onChange={() => {
                }}/>
                <Button type='primary' size='medium'>Войти</Button>
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