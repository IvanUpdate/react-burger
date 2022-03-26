import React, {useEffect, useState} from "react";
import {Link, Redirect, useHistory} from "react-router-dom";
import styles from './reset-password.module.css';
import {Button, Input} from "@ya.praktikum/react-developer-burger-ui-components";
import {useDispatch, useSelector} from "../services/hooks";
import {updatePassword} from "../services/actions/auth";

export const ResetPassword = () => {

    const history = useHistory();
    const isLogin = useSelector((store:any) => store.auth.isLogin);
    const [password, setPassword] = useState('');
    const [token, setToken] = useState('');
    const {updatePasswordApproved} = useSelector(store => store.auth);
    const resetPasswordApproved = useSelector(store => store.auth);
    const dispatch = useDispatch();

    const save = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(updatePassword({password, token}));
    };

    useEffect(() => {
        if (!resetPasswordApproved) {
            history.replace({pathname: "/forgot-password"});
        }
    }, [password, token, updatePasswordApproved]);

    useEffect(() => {
        if (updatePasswordApproved) {
            history.replace({pathname: "/login", state: history.location});
        }
    }, [password, token, updatePasswordApproved]);

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
            <form className={styles.inputs} onSubmit={save}>
                <Input placeholder="Введите новый пароль" value={password} name={'password'}
                       size={'default'}
                       onChange={(e) => {
                           setPassword(e.target.value)
                       }}/>
                <Input value={token} onChange={(e) => {
                    setToken(e.target.value)
                }} placeholder='Введите код из письма'/>
                <Button type='primary' size='medium'>Сохранить</Button>
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