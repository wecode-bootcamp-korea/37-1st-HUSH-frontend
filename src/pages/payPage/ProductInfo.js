import React from 'react';

function ProductInfo() {
  return (
    <div className="info-box">
      <div className="product-table">
        <p></p>
        <p>제품정보</p>
        <p>수량</p>
        <p>금액</p>
        <p>합계 금액</p>
      </div>
      <div className="product-page">
        <img
          className="productImg"
          src={process.env.PUBLIC_URL + '/images/Nav/choco.jpeg'}
          alt="productImg"
        />
        <div>
          <strong>미니쉘</strong>
          <p>초콜릿</p>
        </div>
        <p>(+2500원)</p>
        <p>1</p>
        <p>₩2,500</p>
      </div>
    </div>
  );
}

export default ProductInfo;
