export type TItem = {
    _id: string,
    name: string,
    type: 'bun' | 'sauce' | 'main',
    proteins: number,
    fat: number,
    carbohydrates: number,
    calories: number,
    price: number,
    image: string,
    image_mobile: string,
    image_large: string,
    __v: number,
};

export type TItemValue = 'bun' | 'sauce' | 'main';

export type TUserRequest = {
    email: string;
    password: string;
    name: string;
}

export type TLoginRequest = {
    email: string;
    password: string;
}

export type TResetPassword = {
    email: string;
}

export type TUpdatePassword = {
    password: string;
    token: string;
}

