import { products } from '../../api/products';
import { orders } from '../../api/orders';
import { AppDispatch } from '../store';
import {productSlice} from './ProductSlice';
import {orderSlice} from './OrderSlice';

const delay = 600;

export const fetchProducts = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(productSlice.actions.productsFetching())
    setTimeout(() => {
      const response = products;
      dispatch(productSlice.actions.productsFetchingSuccess(response));
    }, delay);
  } catch (error) {
    dispatch(productSlice.actions.productsFetchingError('Someting went wrong'))
  }
};

export const fetchOrderss = () =>async (dispatch: AppDispatch) => {
  try {
    dispatch(orderSlice.actions.ordersFetching())
    setTimeout(() => {
      const response = orders;
      dispatch(orderSlice.actions.ordersFetchingSuccess(response));
    }, delay)

  } catch (error) {
    dispatch(orderSlice.actions.ordersFetchingError('Someting went wrong'))
  }
};
