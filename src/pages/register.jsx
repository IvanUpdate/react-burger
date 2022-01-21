import React from "react";
import {Link} from "react-router-dom";
import styles from './register.module.css';
import {EmailInput, PasswordInput, Button, Input} from "@ya.praktikum/react-developer-burger-ui-components";

export const Register = () => {


    return (
        <div className={styles.main}>
            <h1 className={styles.title + ' mb-6'}>Регистрация</h1>
            <div className={styles.inputs}>
                <Input value={''} onChange={() =>{}} placeholder='Имя'/>
                <EmailInput value={''} name='email' onChange={() => {
                }} size="default"/>
                <PasswordInput value={''} name='password' onChange={() => {
                }}/>
                <Button type='primary' size='medium'>Зарегистрироваться</Button>
            </div>
            <div className={styles.links+ ' mt-20'}>
                <div>
                    <span className={styles.question}>Уже зарегестрированы? </span>
                    <Link to='/login' className={styles.linkto}>Войти</Link>
                </div>
            </div>
        </div>
    )
};