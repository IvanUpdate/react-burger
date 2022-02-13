import React, {useEffect, useState, FC} from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import burgerTabStyles from './burger-tab.module.css'
import {TItemValue} from "../../../types";

interface ITabPoint {
    current: string;
    changeCurrent: (value: TItemValue) => void;
}


const TabPoint: FC<ITabPoint> =({current, changeCurrent}) => {
    const [currentValue, setCurrentValue] = useState('bun');

    useEffect(() => {
        setCurrentValue(current);
    }, [current]);

    const handleClickHeader = (value: TItemValue) => {
        changeCurrent(value);
    };

    return (
      <div className={ burgerTabStyles.main } >
        <Tab value="one" active={currentValue === 'bun'} onClick={()=>{handleClickHeader('bun')}}>
          Булки
        </Tab>
        <Tab value="two" active={currentValue === 'sauce'} onClick={()=>{handleClickHeader('sauce')}}>
          Соусы
        </Tab>
        <Tab value="three" active={currentValue === 'main'} onClick={()=>{handleClickHeader('main')}}>
          Начинки
        </Tab>
      </div>
    )
  }

  export default TabPoint;

