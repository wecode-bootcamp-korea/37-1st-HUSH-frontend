import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Join from './pages/Join/Join';
import Detail from './pages/detailPage/Detail';
import Login from './pages/Login/Login';
import PayPage from './pages/payPage/PayPage';
import Product from './pages/ProductPage/Product';
import Main from './pages/main/Main';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/join" element={<Join />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/paypage" element={<PayPage />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
