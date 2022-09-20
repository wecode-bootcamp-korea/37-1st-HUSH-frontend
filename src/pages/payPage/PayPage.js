import React from 'react';
import OrderInfo from './OrderInfo';
import './PayPage.scss';
import ProductInfo from './ProductInfo';

function PayPage() {
  return (
    <div className="pay-wrap">
      <h1>주문/결제</h1>
      <div className="product-wrap">
        <h2>제품정보</h2>
        <ProductInfo />
      </div>
      <div className="orderer-wrap">
        <h2>주문자 정보</h2>
        <div className="orderer-info">
          <p>주문자 정보</p>
          <div className="orderer-match">
            <p>
              김대호
              <span>
                <a href="#!">주문자 정보 변경</a>
              </span>
            </p>
            <p>eogh773@naver.com</p>
            <p>010-3633-3190</p>
          </div>
        </div>
      </div>
      <div className="order-wrap">
        <h2>배송 정보</h2>
        <OrderInfo />
      </div>
      <div className="payment-wrap">
        <h2 className="pay-info">결제 정보</h2>
        <div className="payment-box">
          <p className="box-start">합계</p>
          <strong>₩2,500</strong>
          <p>+ 배송비</p>
          <strong>무료</strong>
          <p>= 최종 결제 금액</p>
          <h3>₩2,500</h3>
        </div>
      </div>
      <div className="pay-footer">
        <label>
          <input type="checkbox" name="color" value="blue" />
          <span>(필수)</span>구매하실 제품의 결제정보를 확인하였으며, 구매진행에
          동의합니다.
        </label>
        <button>₩2,500원 결제하기</button>
      </div>
    </div>
  );
}

export default PayPage;
