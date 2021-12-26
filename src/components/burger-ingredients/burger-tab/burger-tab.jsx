import React, {useEffect, useState} from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import burgerTabStyles from './burger-tab.module.css'
import PropTypes from "prop-types";


export default function TabPoint({current}) {
    const [currentValue, setCurrentValue] = useState('bun');

    useEffect(() => {
        setCurrentValue(current);
    }, [current]);

    return (
      <div className={ burgerTabStyles.main } >
        <Tab value="one" active={currentValue === 'bun'} onClick={()=>{}}>
          Булки
        </Tab>
        <Tab value="two" active={currentValue === 'sauce'} onClick={()=>{}}>
          Соусы
        </Tab>
        <Tab value="three" active={currentValue === 'main'} onClick={()=>{}}>
          Начинки
        </Tab>
      </div>
    )
  }

TabPoint.propTypes = {
    current: PropTypes.string.isRequired
};