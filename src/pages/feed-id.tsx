import React from 'react';
import styles from './feed-id.module.css';
import {OrderInfo} from "../components/order/order-info";
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {useParams} from "react-router-dom";
import {useSelector} from "../services/hooks";
import {TOrder} from "../types";
import {TItem} from "../types";
import {formatData} from "../utils/date";
import {price} from "../utils/price";

export const FeedId = () => {

    const {orders} = useSelector(state=>state.ws.feed) || [];
    const {id} = useParams<{id?:string}>();
    const item = id && orders ? orders.find((el:TOrder) => el._id === id) : null;
    const {ingredients, ingredientsRequest} = useSelector(state=> state.ingredients);
    const unique: Array<TItem> = [];


    const count = (ingredient: string, order: TOrder) =>{
        return order.ingredients.filter((element:string) => ingredient === element).length;
    };


    const find_ingredient = (ingredient: string, ingr: TItem[]) =>{
        const item = ingr.find((el:TItem)=> el._id === ingredient);
        if (item && !unique.includes(item)) {
            unique.push(item);
            return item;
        } else {
            return null
        }
    };
    if (item) {
        return (
            <div className={styles.main}>
                <div className={styles.number}>#{item.number}</div>
                <div className={styles.title + ' mt-10'}>{item.name}</div>
                <div className={styles.status + ' mt-3'}>{
                    item.status === 'done' ? 'Выполнен' : 'В работе'
                }</div>
                <div className={styles.contented + ' mt-15'}>Состав:</div>
                <div className={styles.scrollArea + ' mt-6'}>
                    <div className={styles.gallery}>
                        {}
                        {item.ingredients.map((element: string) => {
                            return (
                                <OrderInfo
                                    count={count(element, item)}
                                    item={find_ingredient(element, ingredients)}
                                />
                            );
                        })}
                    </div>
                </div>
                <div className={styles.info + ' mt-10 mb-5'}>
                    <span className={styles.date}>{formatData(item.updatedAt)}</span>
                    <span className={styles.amount}>{price(item.ingredients, ingredients)}<CurrencyIcon
                        type={"primary"}/></span>
                </div>
            </div>
        )
    } else {
        return null;
    }
};