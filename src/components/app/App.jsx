import React, { useState, useEffect } from 'react';
import appstyles from './App.module.css';
import AppHeader from '../app-header/app-header';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';


function App() {

  const url = 'https://norma.nomoreparties.space/api/ingredients';
  const [data, setDate] = useState({
    data: [],
  });

  useEffect(() => {
    getDate();
  }, []);

  function getDate() {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setDate(data))
      .catch((error) => {
        console.log(error,'Something goes wrong');
      });
  }
  return (
    <div className={appstyles.App} id='modals'>
      <AppHeader />
      <div className = {appstyles.main}>
      <BurgerIngredients data={ data.data }/>
      <BurgerConstructor data={ data.data }/>
     
      </div>
    </div>
  );
}

export default App;
