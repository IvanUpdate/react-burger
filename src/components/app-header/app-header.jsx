import React from "react";
import { Logo, BurgerIcon, ListIcon, ProfileIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import appHeaderStyles from './app-header.module.css'

function AppHeader() {
    return (
        <header className={appHeaderStyles.header}>
            <nav className={appHeaderStyles.nav}>

                <div className = {appHeaderStyles.leftButtons}>
                <Button type= 'secondary' size="medium">
                <div className = { appHeaderStyles.buttonInside }>
                    <span><BurgerIcon type="primary" /></span>
                    <span className = 'ml-2'>Конструктор</span>
                </div>
                </Button>
                <Button type= 'secondary' size="medium">
                <div className = { appHeaderStyles.buttonInside }>
                    <span><ListIcon type="primary" /></span>
                    <span className = 'ml-2'>Лента заказов</span>
                </div>
                </Button>
                </div>

                <div className='mr-30 pr-30'><Logo /></div>
                
                <div>
                <Button type= 'secondary' size="medium">
                <div className = { appHeaderStyles.buttonInside }>
                    <span><ProfileIcon type="primary" /></span>
                    <span className = 'ml-2'>Личный кабинет</span>
                </div>
                </Button>
                </div>
            </nav>
        </header>
    );
}

export default AppHeader;