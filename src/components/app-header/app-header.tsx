import React from "react";
import {Logo, BurgerIcon, ListIcon, ProfileIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import { NavLink } from 'react-router-dom';
import styles from './app-header.module.css'

function AppHeader() {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <div className={styles.leftButtons}>
                    <div className="mt-4 mb-4 pr-5 pl-5 mr-1 ml-1">
                        <NavLink to='/' exact={true} className={styles.link} activeClassName={styles.linkActive}>
                            <span><BurgerIcon type="primary"/></span>
                            <span className='ml-2'>Конструктор</span>
                        </NavLink>
                    </div>
                    <div className="mt-4 mb-4 pr-5 pl-5 mr-1 ml-1">
                        <NavLink to='/profile/orders' className={styles.link} activeClassName={styles.linkActive}>
                            <span><ListIcon type="primary"/></span>
                            <span className='ml-2'>Лента заказов</span>
                        </NavLink>
                    </div>
                </div>
                <div className='mr-30 pr-30'><Logo/></div>
                <div>
                    <div className="mt-4 mb-4 pr-5 pl-5 mr-1 ml-1">
                        <NavLink to='/profile' exact={true} className={styles.link} activeClassName={styles.linkActive}>
                            <span><ProfileIcon type="primary"/></span>
                            <span className='ml-2'>Личный кабинет</span>
                        </NavLink>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default AppHeader;