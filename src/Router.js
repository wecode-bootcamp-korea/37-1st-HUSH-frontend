import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Test from './pages/Deaho/Test'


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Test />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
