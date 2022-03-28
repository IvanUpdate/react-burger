import {isToday, format, isYesterday, formatDistanceToNow} from 'date-fns';
import { ru } from 'date-fns/locale';

export const formatData = (date: string): string => {
    let viewData = '';
    const dateFormat = new Date(date);
    isToday(dateFormat)
        ? (viewData += 'Сегодня, ')
        : isYesterday(dateFormat)
        ? (viewData += 'Вчера, ')
        : (viewData += `${formatDistanceToNow(dateFormat, { locale: ru })} назад, `);
    return (viewData += `
    ${format(new Date(dateFormat), 'H:mm', { locale: ru })}
    i-${format(new Date(dateFormat), 'z', { locale: ru })} 
  `);
};