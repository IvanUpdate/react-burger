import React from 'react';
import appstyles from './App.module.css';
import AppHeader from '../app-header/app-header';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import data from '../../utils/data';

function App() {
  return (
    <div className={appstyles.App}>
      <AppHeader />
      <div className = {appstyles.main}>
      <BurgerIngredients data={ data }/>
      <BurgerConstructor data={ data }/>
      </div>
    </div>
  );
}

export default App;
