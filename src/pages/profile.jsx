import React from "react";
import {Link} from "react-router-dom";
import styles from './profile.module.css';
import {EditIcon, Input} from "@ya.praktikum/react-developer-burger-ui-components";

export const Profile = () => {

    const onIconClick = ()=>{
        console.log('was clicked')
    };

    return (
        <div className={styles.main}>
            <div className={styles.sideBar}>
                <div className={styles.links+' mb-20'}>
                <Link to='/profile' className={styles.sideBarContent}>Профиль</Link>
                <Link to='/profile/orders' className={styles.sideBarContent}>История заказов</Link>
                <Link to='/profile/orders/:id' className={styles.sideBarContent}>Выход</Link>
                </div>
                <span>В этом разделе вы можете изменить свои персональные данные</span>
            </div>
            <div className={styles.inputs}>
                <Input
                    type={'text'}
                    placeholder={'Имя'}
                    /*onChange={e => setValue(e.target.value)}*/
                    icon={'EditIcon'}
                    value={'Ivan'}
                    name={'name'}
                    error={false}
                    onIconClick={onIconClick}
                    errorText={'Ошибка'}
                    size={'default'}
                />
                <Input
                    type={'email'}
                    placeholder={'Логин'}
                    /*onChange={e => setValue(e.target.value)}*/
                    icon={'EditIcon'}
                    value={'mir.iv@mail.ru'}
                    name={'name'}
                    error={false}
                    onIconClick={onIconClick}
                    errorText={'Ошибка'}
                    size={'default'}
                />
                <Input
                    type={'password'}
                    placeholder={'Пароль'}
                    /*onChange={e => setValue(e.target.value)}*/
                    icon={'EditIcon'}
                    value={'***'}
                    name={'name'}
                    error={false}
                    onIconClick={onIconClick}
                    errorText={'Ошибка'}
                    size={'default'}
                />
            </div>
        </div>
    )
};