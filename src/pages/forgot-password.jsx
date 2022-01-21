import React from "react";
import {Link} from "react-router-dom";
import styles from './forgot-password.module.css';
import {EmailInput, PasswordInput, Button, Input} from "@ya.praktikum/react-developer-burger-ui-components";

export const ForgotPassword = () => {


    return (
        <div className={styles.main}>
            <h1 className={styles.title + ' mb-6'}>Восстановление пароля</h1>
            <div className={styles.inputs}>
                <EmailInput value={''} name='email' onChange={() => {
                }} size="default"/>
                <Button type='primary' size='medium'>Восстановить</Button>
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