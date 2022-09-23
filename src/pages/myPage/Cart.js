import React, { useState, useEffect } from 'react';
import CartProduct from '../myPage/CartProduct.js';
import '../myPage/Cart.scss';

function Cart() {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    fetch('/data/cart.json')
      .then(res => res.json())
      .then(data => setProductData(data));
  }, []);

  return (
    <>
      <div className="cart">
        <h1 className="cart-title">장바구니</h1>
        <div className="cart-subTitle">일반배송</div>
        <table className="cart-product">
          <thead className="cart-product-head">
            <tr>
              <th>
                <input
                  className="head-checkbox"
                  type="checkbox"
                  id="checkbox"
                />
                <label htmlFor="checkbox" />
              </th>
              <th className="head-text-info">제품 정보</th>
              <th className="head-text">수량</th>
              <th className="head-text">금액</th>
              <th className="head-text-total">합계금액</th>
            </tr>
          </thead>
          <tbody className="cart-product-body">
            {productData.map(product => (
              <CartProduct
                key={product.id}
                img={product.img_id}
                name={product.name}
                category={product.category_id}
                quantity={Number(product.count)}
                price={product.price}
                stock={product.stock}
              />
            ))}
          </tbody>
        </table>
        <button className="cart-delete-btn">선택 삭제</button>
        <ul className="cart-calc">
          <li>
            <span className="calc-title">선택제품</span>
            <span className="calc-count">0 개</span>
          </li>
          <li>
            <span className="calc-title">제품합계</span>
            <span className="calc-sum">₩ 0</span>
          </li>
          <li>
            <span className="calc-title cal-title-shift">배송비</span>
            <span className="calc-sum">무료</span>
          </li>
          <li>
            <span className="calc-title">주문금액</span>
            <span className="calc-sum">₩ 0</span>
          </li>
        </ul>
        <div>
          <button className="cart-shop-btn">쇼핑 계속하기</button>
          <button className="cart-pay-btn">주문하기</button>
        </div>
      </div>
    </>
  );
}

export default Cart;
