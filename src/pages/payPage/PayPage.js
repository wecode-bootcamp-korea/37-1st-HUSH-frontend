import React, { useState, useEffect } from 'react';
import OrderInfo from './OrderInfo';
import './PayPage.scss';
import ProductInfo from './ProductInfo';

function PayPage() {
  const [check, setCheck] = useState(false);

  console.log(typeof check); //지워도 될 거 같은데?
  const checkTeset = e => {
    console.log('체크 박스 여부', e.target.checked);
    setCheck(e.target.checked);
  };

  const clickTest = () => {
    alert('결제가 완료되었습니다');
    //통신 데이터 전송
  };

  //통신 테스트 데이터 확인용
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    fetch('/data/payTest.json')
      .then(response => response.json())
      .then(result => setProductData(result));
  }, []);

  useEffect(() => {
    console.log('장바구니에 담긴 애들을 전체 받아옴', productData);

    productData.map(item => {
      const test = [];
      if (item.check === true) {
        test.push(item);
      }
      console.log('check가 true인 애들만 필터링한 값', test);
    });
  }, []);

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
            <p>김대호</p>
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
          <input
            type="checkbox"
            name="color"
            value="blue"
            onChange={checkTeset}
          />
          <span>(필수)</span>구매하실 제품의 결제정보를 확인하였으며, 구매진행에
          동의합니다.
        </label>
        <button disabled={check === false ? true : false} onClick={clickTest}>
          ₩2,500원 결제하기
        </button>
      </div>
    </div>
  );
}

export default PayPage;
