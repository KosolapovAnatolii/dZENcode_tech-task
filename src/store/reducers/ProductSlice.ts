import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Product } from "../../Types/Product";

interface ProductState {
  products: Product[];
  isLoading: boolean;
  error: string;
};

const initialState: ProductState = {
  products: [],
  isLoading: false,
  error: '',
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    productsFetching(state) {
      state.isLoading = true;
    },
    
    productsFetchingSuccess(state, action: PayloadAction<Product[]>) {
      state.isLoading = false;
      state.products = action.payload;
    },
    productsFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    removeProduct(state, action: PayloadAction<number>) {
      state.products = state.products.filter(order => order.id !== action.payload);
    }
  }
});

export default productSlice.reducer;