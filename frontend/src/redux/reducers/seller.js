import { createReducer } from "@reduxjs/toolkit";

// Initial state
const initialState = {
  isLoading: true,
  isSeller: false,
  seller: null,
  sellers: [],
  error: null,
};

// Reducer using builder callback notation
export const sellerReducer = createReducer(initialState, (builder) => {
  builder
    // Handle LoadSeller actions
    .addCase('LoadSellerRequest', (state) => {
      state.isLoading = true;
    })
    .addCase('LoadSellerSuccess', (state, action) => {
      state.isSeller = true;
      state.isLoading = false;
      state.seller = action.payload;
    })
    .addCase('LoadSellerFail', (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.isSeller = false;
    })

    // Handle get all sellers (admin) actions
    .addCase('getAllSellersRequest', (state) => {
      state.isLoading = true;
    })
    .addCase('getAllSellersSuccess', (state, action) => {
      state.isLoading = false;
      state.sellers = action.payload;
    })
    .addCase('getAllSellerFailed', (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    })

    // Handle clear errors action
    .addCase('clearErrors', (state) => {
      state.error = null;
    });
});
