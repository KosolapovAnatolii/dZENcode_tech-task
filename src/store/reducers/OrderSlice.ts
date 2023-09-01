import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Order } from "../../Types/Order";

interface OrderState {
  orders: Order[];
  isLoading: boolean,
  error: string,
};

const initialState: OrderState = {
  orders: [],
  isLoading: false,
  error: '',
};

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    ordersFetching(state) {
      state.isLoading = true;
    },
    
    ordersFetchingSuccess(state, action: PayloadAction<Order[]>) {
      state.isLoading = false;
      state.orders = action.payload;
    },
    ordersFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    removeOrder(state, action: PayloadAction<number>) {
      state.orders = state.orders.filter(order => order.id !== action.payload);
    }
  }
});

export default orderSlice.reducer;