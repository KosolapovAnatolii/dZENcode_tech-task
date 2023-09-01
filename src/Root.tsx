import { Routes, Route, HashRouter as Router } from 'react-router-dom';
import { Orders } from "../src/Components/Orders";
import { Products } from "../src/Components/Products";
import React from 'react';
import App from './App';
import { Provider } from 'react-redux';
import { setupStore } from './store/store';

const store = setupStore();

export const Root = () => (
  <React.StrictMode>
    <Provider store={store} >
      <Router>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="orders" element={<Orders />} />
            <Route path="products" element={<Products />} />
            <Route
              path="groups"
              element={<p>Groups page is developing right now.</p>}
            />
            <Route
              path="users"
              element={<p>Users page is developing right now.</p>}
            />
            <Route
              path="settings"
              element={<p>Settings page is developing right now.</p>}
            />
            <Route path="*" element={<h2>Not Found </h2>} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);
