import {TItem} from "../types";

export const price = (element_ids:string[], items: TItem[]) => {
    let cost = 0;
    element_ids.forEach(
        id => {
            const ingr_price = items.find(ingredient => ingredient._id === id);
            if (ingr_price) {
                cost+=ingr_price.price;
            }
        }
    );
    return cost;
};
