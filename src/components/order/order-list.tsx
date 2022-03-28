import React, {useEffect} from 'react';
import styles from './order-list.module.css';
import {Order} from "./order";
import {useDispatch, useSelector} from "../../services/hooks";
import {TOrder} from "../../types";
import {
    wsConnectionClosedAuth,
    wsConnectionStartAuth
} from "../../services/actions/websocket";
import {URL_WS} from "../../services/constants";

export const OrderList = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(wsConnectionStartAuth(`${URL_WS}?token=${localStorage.getItem('token')}`));
        return () => {
            dispatch(wsConnectionClosedAuth());
        }
    }, [dispatch]);

    const orders = useSelector(state=>state.ws.feed_history?.orders);

    if(orders) {return(
        <div className={styles.list+' ml-15'}>
            {orders.map((item:TOrder,i:number) => {
                return (<div className={styles.element+' mt-2'}><Order order={item} key={i} order_history={true}/></div>)
            })}
        </div>
    ); } else {
        return null;
    }
}