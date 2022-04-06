import React from "react";
import styles from './order-info.module.css';
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {TItem, TOrder} from "../../types";

interface IOrderInfoProps {
    count: number | null,
    item: TItem | null
}

export const OrderInfo:React.FC<IOrderInfoProps> = ({count, item}) => {
    if (item === null) {
        return null;
    }
    return(
                <div className={styles.item+' mt-4'}>
                    <div className={styles.main}>
                    <img className={styles.image} src={item?.image} alt=''/>
                    <div className={styles.name+' ml-4'}>{item?.name}</div>
                    </div>
                    <div className={styles.quality+' mr-6'}><span className='mr-3'>{`${count} x ${item?.price} `}</span> <CurrencyIcon type={"primary"} /></div>
                </div>
                );
};