import React, {useEffect} from "react";
import {FeedId} from "../../pages/feed-id";
import styles from './feed-center-history.module.css';
import {
    wsConnectionClosedAuth,
    wsConnectionStartAuth
} from "../../services/actions/websocket";
import {URL_WS} from "../../services/constants";
import {useDispatch} from "../../services/hooks";
import {FeedIdHistory} from "../../pages/feed-id-history";



export const LayoutCenterFeedIdHistory  = () => {
    const dispatch = useDispatch();

    useEffect(() => {
            dispatch(wsConnectionStartAuth(`${URL_WS}?token=${localStorage.getItem('token')}`));
            return () => {
                dispatch(wsConnectionClosedAuth());
            }
    }, [dispatch]);

    return (
        <div className={styles.main}>
            <FeedIdHistory/>
        </div>
    )
};