import {TOrder} from "../types";

export const status = (order: TOrder) => {
    switch (order.status) {
        case ('done'):
            return 'Выполнен';
        case ('pending'):
            return 'Готовится';
        case ('created'):
            return 'Создан';
        default:
            return '';

    }
};