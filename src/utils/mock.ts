import {TItem, TOrder} from "../types";

export const mockItemMain: TItem = {
    _id: "60666c42cc7b410027a1a9b5",
    name: "Говяжий метеорит (отбивная)",
    type: "main",
    proteins: 800,
    fat: 800,
    carbohydrates: 300,
    calories: 2674,
    price: 3000,
    image: "https://code.s3.yandex.net/react/code/meat-04.png",
    image_mobile: "https://code.s3.yandex.net/react/code/meat-04-mobile.png",
    image_large: "https://code.s3.yandex.net/react/code/meat-04-large.png",
    __v: 0
};

export const mockItemBun: TItem = {
    _id: "60666c42cc7b410027a1a9b1",
    name: "Краторная булка N-200i",
    type: "bun",
    proteins: 80,
    fat: 24,
    carbohydrates: 53,
    calories: 420,
    price: 1255,
    image: "https://code.s3.yandex.net/react/code/bun-02.png",
    image_mobile: "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
    image_large: "https://code.s3.yandex.net/react/code/bun-02-large.png",
    __v: 0
};

export const order: TOrder = {
    ingredients: ["60666c42cc7b410027a1a9b1"],
    _id: '3325235',
    status: 'done',
    number: 1222,
    createdAt: '11.02.2021',
    updatedAt: '11.02.2021',
    name: 'бургер',
};