import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    deleteProduct: (state, action) => {
      state.products = state.products.filter(product => product.id !== action.payload);
    },
    updateProduct: (state, action) => {
      const { id, updates } = action.payload;
      const product = state.products.find(product => product.id === id);
      if (product) {
        Object.assign(product, updates);
      }
    },
    toggleAvailability: (state, action) => {
      const product = state.products.find(product => product.id === action.payload);
      if (product) {
        product.available = !product.available;
      }
    },
  },
});

export const { addProduct, deleteProduct, updateProduct, toggleAvailability } = productsSlice.actions;
export default productsSlice.reducer;
