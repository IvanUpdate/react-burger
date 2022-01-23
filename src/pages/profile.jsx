import React from "react";
import {NavLink, useLocation } from "react-router-dom";
import styles from './profile.module.css';
import {EditIcon, Input} from "@ya.praktikum/react-developer-burger-ui-components";
import { ProfileInfo } from '../components/profile-info/profile-info';

export const Profile = () => {

    const location = useLocation();

    return (

        <div className={styles.main}>
            <div className={styles.sideBar}>
                <div className={styles.links+' mb-20'}>
                <NavLink to='/profile' exact={true} className={styles.sideBarContent} activeClassName={styles.sideBarContentActive}>Профиль</NavLink>
                <NavLink to='/profile/orders' exact={true} className={styles.sideBarContent} activeClassName={styles.sideBarContentActive}>История заказов</NavLink>
                <NavLink to='' exact={true} className={styles.sideBarContent} activeClassName={styles.sideBarContentActive}>Выход</NavLink>
                </div>
                <span>В этом разделе вы можете изменить свои персональные данные</span>
            </div>
            {location.pathname === "/profile" && <ProfileInfo />}
        </div>
    )
};