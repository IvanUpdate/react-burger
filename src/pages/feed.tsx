import React from 'react';
import styles from './feed.module.css';
import {useEffect} from 'react';
import {Order} from "../components/order/order";
import {useDispatch, useSelector} from "../services/hooks";
import {wsConnectionStart, wsConnectionClosed} from "../services/actions/websocket";
import {URL_WS} from '../services/constants';
import {TOrder} from "../types";

export const Feed = () => {

    const dispatch = useDispatch();
    const {feed, feedGet} = useSelector((state)=>state.ws);

    useEffect(() => {
        dispatch(wsConnectionStart(URL_WS+'/all'));
        return () => {
            dispatch(wsConnectionClosed());
        }
    }, [dispatch]);

    const completed = feed && feed.orders ? feed.orders.filter((element: TOrder)=>element.status==='done') : [];
    const inprocess = feed && feed.orders ? feed.orders.filter((element: TOrder) => element.status === 'created' || element.status === 'pending') : [];
    const total = feed ? feed.total : 0;
    const totalToday = feed ? feed.totalToday : 0;


    if (!feedGet) {
        return null;
    }

    return (
        <div className={styles.main}>
            <div className={styles.orders+' mr-15'}>
                <p className={styles.mainTitle}>Лента заказов</p>
                <div className={styles.scrollArea}>
                    {feed.orders.map((item:TOrder, i:number) => {
                        return (<div className={styles.element+' mt-2'}><Order order={item} key={i} order_history={false}/></div>)
                    })}
                </div>
            </div>

            <div className={styles.content}>
                <div className={styles.orderInfo}>
                    <div className={styles.column+' mr-9'}>
                        <div className={styles.title+' mb-6'}>Готовы:</div>
                        <div className={styles.list}>
                            {completed.slice(0,10).map((element:TOrder) => {
                                return (<div className={styles.element+' mt-2'}>{element.number}</div>)
                            })}
                        </div>
                    </div>
                    <div className={styles.column}>
                        <div className={styles.title+' mb-6'}>В работе:</div>
                        <div className={styles.list}>
                            {inprocess.slice(0,10).map((element:TOrder) => {
                                return (<div className={styles.element+' mt-2'}>{element.number}</div>)
                            })}
                        </div>
                    </div>
                </div>
                <div className={styles.title+' mt-15'}>Выполнено за все время:</div>
                <div className={styles.orderQuantity}>{ total }</div>
                <div className={styles.title+' mt-15'}>Выполнено за сегодня:</div>
                <div className={styles.orderQuantity}>{totalToday}</div>
            </div>

        </div>
    )
}