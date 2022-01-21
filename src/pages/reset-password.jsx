import React from "react";
import {Link} from "react-router-dom";
import styles from './reset-password.module.css';
import {EmailInput, PasswordInput, Button, Input} from "@ya.praktikum/react-developer-burger-ui-components";

export const ResetPassword = () => {


    return (
        <div className={styles.main}>
            <h1 className={styles.title + ' mb-6'}>Восстановление пароля</h1>
            <div className={styles.inputs}>
                <Input className={styles.inputs} placeholder="Введите новый пароль"  value={''} name={'password'} size={'default'}/>
                <Input value={''} onChange={() =>{}} placeholder='Введите код из письма'/>
                <Button type='primary' size='medium'>Сохранить</Button>
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