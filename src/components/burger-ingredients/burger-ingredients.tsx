import React, {useRef, useState} from "react";
import {useSelector} from '../../services/hooks';
import burgerIngredientsStyle from './burger-ingredients.module.css';
import TabPoint from "./burger-tab/burger-tab";
import Ingredient from "./ingredient/ingredient";
import {getTwoElementsDistant} from "../../services/get-twoelements-distant";
import {TItem, TItemValue} from "../../types";


export default function BurgerIngredients() {

    const {ingredients, ingredientsRequest} = useSelector(state => state.ingredients);
    const [current, setCurrent] = useState('bun');

    const buns = ingredients.filter((item: TItem) => (item.type === 'bun'));
    const sauces = ingredients.filter((item: TItem)  => (item.type === 'sauce'));
    const mains = ingredients.filter((item: TItem)  => (item.type === 'main'));

    const burgerTopRef = useRef(null);
    const bunsRef = useRef<HTMLDivElement>(null);
    const saucesRef = useRef<HTMLDivElement>(null);
    const mainsRef = useRef<HTMLDivElement>(null);

    const handleScroll = () => {
        const bunsDistance = Math.abs(getTwoElementsDistant(burgerTopRef, bunsRef));
        const saucesDistance = Math.abs(getTwoElementsDistant(burgerTopRef, saucesRef));
        const mainsDistance = Math.abs(getTwoElementsDistant(burgerTopRef, mainsRef));
        const min = Math.min(bunsDistance, saucesDistance, mainsDistance);
        if (min === bunsDistance) {
            setCurrent('bun');
        } else if (min === saucesDistance) {
            setCurrent('sauce');
        } else {
            setCurrent('main')
        }
    };

    const changeCurrent = (value: TItemValue) =>{
        setCurrent(value);
        switch (value){
            case 'bun':
                if (bunsRef.current) {
                    bunsRef.current.scrollIntoView({behavior: 'smooth'});
                }
                break;
            case 'sauce':
                if (saucesRef.current) {
                    saucesRef.current.scrollIntoView({behavior: 'smooth'});
                }
                break;
            case 'main':
                if (mainsRef.current) {
                    mainsRef.current.scrollIntoView({behavior: 'smooth'});
                }
                break;
            default:
                break;
        };
    };

    if (!ingredients) {
        return <p>?????????????????? ???????????? ?????? ?????????????????? ????????????</p>
    } else if (ingredientsRequest) {
        return <p>????????????????...</p>
    } else {
        return (
            <div className={burgerIngredientsStyle.main + ' mr-10'} ref={burgerTopRef} data-cy="page">
                <h1 className={burgerIngredientsStyle.title + ' mt-10 mb-5'}>???????????????? ????????????</h1>
                <TabPoint current={current} changeCurrent={changeCurrent}/>
                <div className={burgerIngredientsStyle.scrollArea} onScroll={handleScroll}>
                    <h2 className={burgerIngredientsStyle.title2 + ' mt-10 mb-6'} ref={bunsRef}>??????????</h2>
                    <div className={burgerIngredientsStyle.content} data-cy='buns'>
                        {buns.map((item:TItem) => {
                            return (<Ingredient item={item} key={item._id}/>)
                        })}
                    </div>
                    <h2 className={burgerIngredientsStyle.title2 + ' mt-10 mb-6'} ref={saucesRef}>??????????</h2>
                    <div className={burgerIngredientsStyle.content} data-cy='sauces'>
                        {sauces.map((item:TItem) => {
                            return (<Ingredient item={item} key={item._id}/>)
                        })}
                    </div>
                    <h2 className={burgerIngredientsStyle.title2 + ' mt-10'} ref={mainsRef}>??????????????</h2>
                    <div className={burgerIngredientsStyle.content} data-cy='mains'>
                        {mains.map((item:TItem) => {
                            return (<Ingredient item={item} key={item._id}/>);
                        })}
                    </div>
                </div>
            </div>
        )
    }
}



