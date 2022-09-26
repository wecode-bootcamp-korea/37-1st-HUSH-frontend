import React, { useState, useEffect } from 'react';
import OrderInfo from './OrderInfo';
import './PayPage.scss';
import ProductInfo from './ProductInfo';

function PayPage() {
  const [payData, setPayData] = useState([]);

  useEffect(() => {
    fetch('http://192.168.228.223:3000/products/showproduct/3', {
      headers: {
        authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo2LCJpYXQiOjE2NjQwMDk3ODR9.nvQGE9HLe8n-JCgqqRk3O-2dGEujzQhWIgm0WyCKN60',
      },
    })
      .then(res => res.json())
      .then(data => {
        setPayData(data);
      });
  }, []);
  console.log(payData);

  const [check, setCheck] = useState(false);

  const isCheck = e => {
    setCheck(e.target.checked);
  };

  const [selecter, setSelecter] = useState('');
  const [orderMessages, setOrderMessages] = useState('');
  const [isOrderInput, setIsOrderInput] = useState(false);

  const choiceMessages = e => {
    setSelecter(e.target.selectedIndex);
    setOrderMessages(e.target.value);
  };

  const inputMessages = e => {
    setOrderMessages(e.target.value);
  };

  useEffect(() => {
    selecter === 4 ? setIsOrderInput(true) : setIsOrderInput(false);
  }, [choiceMessages]);

  const [testData, setTestData] = useState([]);

  useEffect(() => {
    fetch('/data/payTest.json')
      .then(response => response.json())
      .then(result => setTestData(result));
  }, []);

  const payBtn = () => {
    fetch('http://192.168.192.223:3000/order', {
      method: 'POST',
      headers: {
        authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo2LCJpYXQiOjE2NjM3NTcxNTZ9.aWMCo2vBo_8cEUxE1HwGRekiuQvgRYEwS09JdFiQDmw',
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        total: testData[0].price,
        reqMessage: orderMessages,
        address: testData[0].order,
      }),
    })
      .then(response => response.json())
      .then(result => console.log(result));
    alert('결제가 완료되었습니다');
  };

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
        <OrderInfo
          choiceMessages={choiceMessages}
          isOrderInput={isOrderInput}
          inputMessages={inputMessages}
          orderMessages={orderMessages}
        />
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
          <input type="checkbox" name="color" value="blue" onChange={isCheck} />
          <span>(필수)</span>구매하실 제품의 결제정보를 확인하였으며, 구매진행에
          동의합니다.
        </label>
        <button disabled={check === false ? true : false} onClick={payBtn}>
          ₩2,500원 결제하기
        </button>
      </div>
    </div>
  );
}

export default PayPage;
