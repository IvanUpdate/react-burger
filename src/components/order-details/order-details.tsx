import React from "react";
import {useSelector} from "../../services/hooks";
import orderStyles from './order-details.module.css';
import image from '../../images/done.png';

const OrderDetails = () => {

    const {number} = useSelector(state => state.order.orderInfo.order);

    return (
        <div className={orderStyles.main}>
            <div className={orderStyles.value + ' mt-4'}>{number}</div>
            <div className={orderStyles.identify + ' mt-8'}>идентификатор заказа</div>
            <div className={orderStyles.checkMark + ' mt-15'}><img src={image} alt=''/></div>
            <div className={orderStyles.remark + ' mt-15'}>Ваш заказ начали готовить</div>
            <div className={orderStyles.wish + ' mt-2 mb-30'}>Дождитесь готовности на орбитальной станции</div>
        </div>
    )
};

export default OrderDetails;
