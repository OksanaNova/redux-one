import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createStore } from 'redux'

// 1. STORE - ALL DATA



// 2. ACTION - ПРЕДУСМАТРИВАЕМ ВСЕ ВОЗМОЖНЫЕ ДЕЙСТВИЯ ПОЛЬЗОВАТЕЛЯ, ЧТО ОН МОЖЕТ СДЕЛАТЬ
// A
const addToCart = () => {
  return {
    type: "ADD_TO_CART"
  }
}
// B
const removeItem = () => {
  return {
    type: "REMOVE_ITEM"
  }
}
// C
const changeNumber = () => {
  return {
    type: "CHANGE_NUMBER"
  }
}

// 3. REDUCER - ЩПИСАНИЕ КАК НАШИ НАМЕРЕНИЯ СОВЕРШИТЬ ДЕЙСТВИЯ ПОМЕНЯЮТ СОСТОЯНИЕ

const cart = (state = 0, action) => {
  switch(action.type) {
    case 'ADD_TO_CART':
      return state + 1;

    case 'REMOVE_ITEM':
      return state - 1;
  }
}

let store = createStore(cart);
store.subscribe(() => console.log(store.getState()))

// 4. DISPATCH - 

store.dispatch(addToCart());
store.dispatch(addToCart());
store.dispatch(addToCart());
store.dispatch(addToCart());
store.dispatch(addToCart());
store.dispatch(removeItem());



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
