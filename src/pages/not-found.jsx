import React from 'react';
import { Link } from 'react-router-dom';

import styles from './not-found.module.css';
import pageNotFound from "../images/404.jpeg";

export const NotFound404 = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <img alt="page not found" src={pageNotFound} />
                <br />
                <Link to={{pathname: '/'}} className={styles.link}>Перейти на галавную страницу</Link>
            </div>
        </div>
    );
};