import React from "react";
import {Logo, BurgerIcon, ListIcon, ProfileIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import appHeaderStyles from './app-header.module.css'

function AppHeader() {
    return (
        <header className={appHeaderStyles.header}>
            <nav className={appHeaderStyles.nav}>
                <div className={appHeaderStyles.leftButtons}>
                    <div className="mt-4 mb-4 pr-5 pl-5 mr-1 ml-1">
                        <a href='/' className={appHeaderStyles.link}>
                            <span><BurgerIcon type="primary"/></span>
                            <span className='ml-2'>Конструктор</span>
                        </a>
                    </div>
                    <div className="mt-4 mb-4 pr-5 pl-5 mr-1 ml-1">
                        <a href='/' className={appHeaderStyles.link}>
                            <span><ListIcon type="primary"/></span>
                            <span className='ml-2'>Лента заказов</span>
                        </a>
                    </div>
                </div>
                <div className='mr-30 pr-30'><Logo/></div>
                <div>
                    <div className="mt-4 mb-4 pr-5 pl-5 mr-1 ml-1">
                        <a href='/' className={appHeaderStyles.link}>
                            <span><ProfileIcon type="primary"/></span>
                            <span className='ml-2'>Личный кабинет</span>
                        </a>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default AppHeader;