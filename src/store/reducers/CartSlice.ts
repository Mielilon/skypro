import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductType } from '../../types/product';

type CartProductType = ProductType & { count: number };

const initialState: CartProductType[] = [];

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct(state, action: PayloadAction<CartProductType>) {
      state.push(action.payload);
    },
    deleteProduct(state, action: PayloadAction<number>) {
      state.splice(action.payload, 1);
    },
    deleteAllProducts(state) {
      state.splice(0, state.length);
    },
    increaseProductCounter(state, action: PayloadAction<number>) {
      state[action.payload].count++;
    },
    decreaseProductCounter(state, action: PayloadAction<number>) {
      state[action.payload].count--;
    },
  },
});

export default cartSlice.reducer;
