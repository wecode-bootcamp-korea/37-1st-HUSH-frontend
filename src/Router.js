import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/nav/Nav';
import Footer from './components/footer/Footer';
import Join from './pages/Join/Join';
import DetailPage from './pages/datailPage/DatailPage';
import Login from './pages/Login/Login';
import MyPage from './pages/myPage/MyPage';
import PayPage from './pages/payPage/PayPage';
import Product from './pages/ProductPage/Product';
import Main from './pages/main/Main';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/nav" element={<Nav />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/join" element={<Join />} />
        <Route path="/detailList" element={<DetailPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/paypage" element={<PayPage />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
