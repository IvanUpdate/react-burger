import React from "react"
import orderStyles from './order-details.module.css'
import { CheckMarkIcon } from "@ya.praktikum/react-developer-burger-ui-components"

const OrderDetails = (props) => {

    
    return (
        <div className={orderStyles.main}>
            <div className={orderStyles.value+' mt-4'}>{props.value}</div>
            <div className={orderStyles.identify+' mt-8'}>идентификатор заказа</div>
            <div className={orderStyles.checkMark+' mt-15'}><CheckMarkIcon type="primary" /></div>
            <div className={orderStyles.remark+' mt-15'}>Ваш заказ начали готовить</div>
            <div className={orderStyles.wish+' mt-2'}>Дождитесь готовности на орбитальной станции</div>
        </div>
    )
}

export default OrderDetails;