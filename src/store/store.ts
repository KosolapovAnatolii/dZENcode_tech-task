import { configureStore, combineReducers } from '@reduxjs/toolkit';
import productReducer from './reducers/ProductSlice';
import orderReducer from './reducers/OrderSlice';
import filterReducer from './reducers/FilterSlice';

const rootReducer = combineReducers({
  productReducer,
  orderReducer,
  filterReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    devTools: true,
  })
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
