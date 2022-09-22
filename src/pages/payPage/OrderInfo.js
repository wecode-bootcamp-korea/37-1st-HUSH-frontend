import React, { useState } from 'react';

function OrderInfo() {
  return (
    <div>
      <div className="order-info">
        <div className="order-address">
          <strong>배송지</strong>
          <p>서울시 동작구 상도동 356-6 1층 101호</p>
          <a href="#!">배송지 정보 변경</a>
        </div>
        <div className="order-message">
          <strong>배송메세지</strong>
          <select name="choice-message">
            <option value="1">선택해주세요</option>
            <option value="2">부재 시 경비실에 맡겨주세요</option>
            <option value="3">직접 받을게요</option>
            <option value="4">배송 전에 연락주세요</option>
            <option value="5">직접 입력</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default OrderInfo;
