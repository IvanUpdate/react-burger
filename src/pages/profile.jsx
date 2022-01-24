import React from "react";
import {useDispatch} from "react-redux";
import {NavLink, useLocation} from "react-router-dom";
import styles from './profile.module.css';
import {ProfileInfo} from '../components/profile-info/profile-info';
import {logOut} from "../services/actions/auth";

export const Profile = () => {

    const dispatch = useDispatch();
    const location = useLocation();

    const close = (e) => {
        e.preventDefault();
        dispatch(logOut());
    };

    return (

        <div className={styles.main}>
            <div className={styles.sideBar}>
                <div className={styles.links + ' mb-20'}>
                    <NavLink to='/profile' exact={true} className={styles.sideBarContent}
                             activeClassName={styles.sideBarContentActive}>Профиль</NavLink>
                    <NavLink to='/profile/orders' exact={true} className={styles.sideBarContent}
                             activeClassName={styles.sideBarContentActive}>История заказов</NavLink>
                    <NavLink to='/login' exact={true} onClick={close} className={styles.sideBarContent}
                             activeClassName={styles.sideBarContentActive}>Выход</NavLink>
                </div>
                <span>В этом разделе вы можете изменить свои персональные данные</span>
            </div>
            {location.pathname === "/profile" && <ProfileInfo/>}
        </div>
    )
};