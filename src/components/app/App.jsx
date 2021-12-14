import React, { useState, useEffect } from 'react';
import appstyles from './App.module.css';
import AppHeader from '../app-header/app-header';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';

const API_URL = 'https://norma.nomoreparties.space/api/';

function App() {


  const [data, setData] = useState({
    data: [],
  });

  useEffect(() => {
    const getDate = async() => {
      try {
        const response = await fetch(API_URL + 'ingredients');
        if (!response.ok) {
          throw new Error('Запрос не успешен!');
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Ошибка:", error);
      }
    }
    getDate();
  }, []);



  return (
    <div className={appstyles.App} id='modals'>
      <AppHeader />
      <div className={appstyles.main}>
        <BurgerIngredients data={data.data} />
        <BurgerConstructor data={data.data} />

      </div>
    </div>
  );
}

export default App;
