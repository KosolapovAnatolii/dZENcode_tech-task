import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/App.scss';
import { Header } from './Components/Header';
import { Main } from './Components/Main';
import { useAppDispatch } from './store/hooks';
import { fetchOrderss, fetchProducts } from './store/reducers/ActionCreators';


function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchOrderss());
    }, [dispatch]);
  return (
    <div>
      <Header />
      <Main />
    </div>
  );
}

export default App;
