import React, {useEffect, useState} from "react";
import {Link, Redirect, useHistory} from "react-router-dom";
import styles from './reset-password.module.css';
import {Button, Input} from "@ya.praktikum/react-developer-burger-ui-components";
import {useDispatch, useSelector} from "react-redux";
import {updatePassword} from "../services/actions/auth";

export const ResetPassword = () => {

    const history = useHistory();
    const user = useSelector((store)=>store.auth.user);
    const [password, setPassword] = useState('');
    const [token, setToken] = useState('');

    const isUpdate = useSelector((store) => store.auth.updatePasswordApproved);

    const dispatch = useDispatch();

    const save = (e) => {
        e.preventDefault();
        dispatch(updatePassword(password,token));
    };

    useEffect(()=>{
        if (isUpdate) {
            history.replace({ pathname: "/login", state: history.location });
        }
    },[password, token, isUpdate]);

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
            <h1 className={styles.title + ' mb-6'}>Восстановление пароля</h1>
            <div className={styles.inputs}>
                <Input className={styles.inputs} placeholder="Введите новый пароль"  value={password} name={'password'} size={'default'}
                onChange={(e)=>{setPassword(e.target.value)}}/>
                <Input value={token} onChange={(e) =>{setToken(e.target.value)}} placeholder='Введите код из письма'/>
                <Button type='primary' size='medium' onClick={save}>Сохранить</Button>
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