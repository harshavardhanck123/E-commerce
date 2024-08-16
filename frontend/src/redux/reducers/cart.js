import { createReducer } from '@reduxjs/toolkit';

// Initial state
const initialState = {
  cart: localStorage.getItem('cartItems')
    ? JSON.parse(localStorage.getItem('cartItems'))
    : [],
};

// Reducer using builder callback notation
export const cartReducer = createReducer(initialState, (builder) => {
  builder
    .addCase('addToCart', (state, action) => {
      const item = action.payload;
      const isItemExist = state.cart.find((i) => i._id === item._id);
      if (isItemExist) {
        // Update existing item
        state.cart = state.cart.map((i) => (i._id === isItemExist._id ? item : i));
      } else {
        // Add new item
        state.cart = [...state.cart, item];
      }
    })
    .addCase('removeFromCart', (state, action) => {
      // Remove item from cart
      state.cart = state.cart.filter((i) => i._id !== action.payload);
    });
});

