import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import CartPage from '../pages/CartPage/CartPage';
import CatalogPage from '../pages/CatalogPage/CatalogPage';

function App(): React.ReactElement {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.CATALOG}
          element={<CatalogPage />}
        />
        <Route
          path={AppRoute.CART}
          element={<CartPage />}
        />
        <Route
          path="*"
          element={<CatalogPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
