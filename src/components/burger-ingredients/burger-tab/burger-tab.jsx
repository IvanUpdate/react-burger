import React, {useEffect, useState} from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import burgerTabStyles from './burger-tab.module.css'
import PropTypes from "prop-types";


export default function TabPoint({current, changeCurrent}) {
    const [currentValue, setCurrentValue] = useState('bun');

    useEffect(() => {
        setCurrentValue(current);
    }, [current]);

    const handleClickHeader = (value) => {
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

TabPoint.propTypes = {
    current: PropTypes.string.isRequired
};