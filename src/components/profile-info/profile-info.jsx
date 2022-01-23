import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import styles from './profile-info.module.css';
import {Button, Input} from "@ya.praktikum/react-developer-burger-ui-components";
import {getUser} from "../../services/actions/auth";

export const ProfileInfo = () => {

    const dispatch = useDispatch();

    const {user} = useSelector((store) => store.auth);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [nameDisabled, setNameDisabled] = useState(true);
    const [emailDisabled, setEmailDisabled] = useState(true);
    const [passwordDisabled, setPasswordDisabled] = useState(true);

    useEffect(() => {
        dispatch(getUser());
        console.log(user);
    }, [dispatch]);

    return (user ? (
        <div className={styles.profile}>
            <Input
                type={'text'}
                placeholder={'Имя'}
                disabled={nameDisabled}
                onChange={e => setName(e.target.value)}
                icon={'EditIcon'}
                value={nameDisabled ? user.name : name}
                name={'name'}
                error={false}
                onIconClick={() => setNameDisabled(false)}
                errorText={'Ошибка'}
                size={'default'}
            />
            <Input
                type={'email'}
                placeholder={'Логин'}
                disabled={emailDisabled}
                onChange={e => setEmail(e.target.value)}
                icon={'EditIcon'}
                value={emailDisabled ? user.email : email}
                name={'name'}
                error={false}
                onIconClick={() => setEmailDisabled(false)}
                errorText={'Ошибка'}
                size={'default'}
            />
            <Input
                type={'password'}
                placeholder={'Пароль'}
                disabled={passwordDisabled}
                onChange={e => setPassword(e.target.value)}
                icon={'EditIcon'}
                value={passwordDisabled ? '******' : password}
                name={'name'}
                error={false}
                onIconClick={() => setPasswordDisabled(false)}
                errorText={'Ошибка'}
                size={'default'}
            />
            <div className={styles.buttons+' pt-5'}>
                <Button type='primary' size='small' onClick={() => {
                }}>Сохранить</Button>
                <Button type='primary' size='small' onClick={() => {
                }}>Отмена</Button>
            </div>
        </div>) : null);
}