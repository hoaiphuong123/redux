import { filter, map, uniqBy, sum } from 'lodash';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  product: null,
  totalQuantity: 0,
  subAmount: 0,
  checkout: {
    cart: [],
    subtotal: 0,
    total: 0,
    discount: 0,
  },
};

const slice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addProduct(state, action) {
      const itemInCart = state.checkout.cart.find((item) => item.id === action.payload.id);
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.checkout.cart.push({ ...action.payload, quantity: 1 });
      }
    },

    increaseQuantity(state, action) {
      const productId = action.payload;
      console.log('productId', productId);
      state.checkout.cart = map(state.checkout.cart, (product) => {
        console.log('product.id', product.id);
        console.log('product.id2', productId);
        if (product.id === productId) {
          console.log('quantity', product.quantity);
          return {
            ...product,
            quantity: product.quantity + 1,
          };
        }
        return product;
      });
    },

    decreaseQuantity(state, action) {
      const productId = action.payload;
      state.checkout.cart = map(state.checkout.cart, (product) => {
        if (product.id === productId) {
          return {
            ...product,
            quantity: product.quantity - 1,
          };
        }
        return product;
      });
    },

    removeProduct(state, action) {
      let index = state.checkout.cart.find((item) => item.id === action.payload);
      if (index !== -1) {
        state.checkout.cart.splice(index, 1);
      }
    },
  },
});

// Reducer
export default slice.reducer;

// Actions
export const { addProduct, CheckoutProduct, removeProduct, increaseQuantity, decreaseQuantity } = slice.actions;
