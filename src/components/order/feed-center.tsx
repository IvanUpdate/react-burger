import React, {useEffect} from "react";
import {FeedId} from "../../pages/feed-id";
import styles from './feed-center.module.css';
import {
    wsConnectionClosed,
    wsConnectionStart,
} from "../../services/actions/websocket";
import {URL_WS} from "../../services/constants";
import {useDispatch} from "../../services/hooks";



export const LayoutCenterFeedId  = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(wsConnectionStart(URL_WS+'/all'));
        return () => {
            dispatch(wsConnectionClosed());
        }
    }, [dispatch]);

    return (
        <div className={styles.main}>
            <FeedId/>
        </div>
    )
};