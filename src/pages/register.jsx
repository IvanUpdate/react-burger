import React, {useEffect, useState} from "react";
import {Link, Redirect, useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {registerRequest} from "../services/actions/auth";
import styles from './register.module.css';
import {EmailInput, PasswordInput, Button, Input} from "@ya.praktikum/react-developer-burger-ui-components";

export const Register = () => {

    const history = useHistory();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const user = useSelector((store)=>store.auth.user);

    const dispatch = useDispatch();

    const register = (e) => {
        e.preventDefault();
        dispatch(registerRequest(name, email, password));
        console.log('aferrequest');
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
            <h1 className={styles.title + ' mb-6'}>Регистрация</h1>
            <div className={styles.inputs}>
                <Input value={name} onChange={(e) =>{setName(e.target.value)}} placeholder='Имя'/>
                <EmailInput value={email} name='email' onChange={(e) => {setEmail(e.target.value);
                }} size="default"/>
                <PasswordInput value={password} name='password' onChange={(e) => {setPassword(e.target.value)}}/>
                <Button type='primary' size='medium' onClick={register}>Зарегистрироваться</Button>
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