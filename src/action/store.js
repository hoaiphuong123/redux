import { ADD_COUNT } from './type.js';
import { configureStore } from '@reduxjs/toolkit';

const initialState = {
  products: [
    {
      id: '0',
      name: 'sản phẩm 1',
      price: 100,
      quantity: [],
      total: [],
    },
    {
      id: '1',
      name: 'sản phẩm 2',
      price: 200,
      quantity: [],
      total: [],
    },
    {
      id: '2',
      name: 'sản phẩm 3',
      price: 300,
      quantity: [],
      total: [],
    },
    {
      id: '3',
      name: 'sản phẩm 4',
      price: 500,
      quantity: [],
      total: [],
    },
  ],
  warenListe: [],
  totalToPay: [],
  count: 0,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COUNT:
      return { count: action.value + 1 };
    default:
      return state;
  }
};

export default rootReducer;

const store = configureStore({ reducer: rootReducer });

export { store };
