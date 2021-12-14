import React from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import burgerTabStyles from './burger-tab.module.css'

export default function TabPoint() {
    const [current, setCurrent] = React.useState('bun')
    return (
      <div className={ burgerTabStyles.main } >
        <Tab value="one" active={current === 'bun'} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value="two" active={current === 'sauce'} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value="three" active={current === 'main'} onClick={setCurrent}>
          Начинки
        </Tab>
      </div>
    )
  }