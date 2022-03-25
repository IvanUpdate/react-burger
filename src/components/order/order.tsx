import React from 'react';
import styles from './order.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import {Link, useLocation} from "react-router-dom";
import {TItem, TOrder} from "../../types";
import {formatData} from "../../utils/date";
import {useSelector} from "../../services/hooks";
import {price} from "../../utils/price";
import {status} from "../../utils/order-status";

interface IOrderProps {
    order: TOrder;
    order_history: boolean;
}

export const Order:React.FC<IOrderProps> = ({order, order_history}) => {
    const location = useLocation();
    const link = location.pathname === "/profile/orders" ? 'profile/orders' : 'feed';
    const date = formatData(order.createdAt);
    const {ingredients, ingredientsRequest} = useSelector((state:any) => state.ingredients);

    const pics = (element_ids:string[], items: TItem[]) => {
        const images: string[] = [];
        element_ids.forEach(
            id => {
                const image = items.find(ingredient => ingredient._id === id);
                if (image) {
                    images.push(image.image);
                }
            }
        );
        return images;
    };

    return (
        <Link to={{pathname: `/${link}/${order._id}`, state: {background: location, from: location.pathname}}} className={styles.link}>
        <div className={styles.main+' pl-6 pr-6 mb-4'}>
            <div className={styles.order+' pt-6'}>
                <div className={styles.orderNumber}>{order.number}</div>
                <div className={styles.date}>{date}</div>
            </div>
            <div className={styles.title+' mt-6'}>
                {order.name}
                {order_history && <div className={styles.status+' mt-2'}>{status(order)}</div>}
            </div>
            <div className={styles.detail+' mt-6 pb-6'}>
                <div className={styles.galley}>
                    {pics(order.ingredients,ingredients).map((element, index) => {
                    return(
                        <img className={styles.image} src={element} alt=''/>);
                })}
                </div>
                <div className={styles.currency}><p className='pr-3'>{price(order.ingredients,ingredients)}</p><CurrencyIcon type={"primary"} /> </div>
            </div>
        </div>
        </Link>
    );
};