import React, { useState, useEffect } from 'react';

function ProductInfo() {
  // const [productData, setProductData] = useState([]);      !!!제품 데이터 저장 스테이트!!!!

  // useEffect(() => {
  //   fetch('http://10.58.62.11:3000/endPoint', {
  //     method: 'GET',
  //   })
  //     .then(response => response.json())
  //     .then(data => {
  //       setProductData(data);
  //     });
  // }, []);      !!!제품 데이터 받는 통신!!!

  // productData.map(item => {
  //   return (
  //     <div className="product-page">
  //       <img className="productImg" src={item.상품사진} alt="productImg" />
  //       <div>
  //         <strong>{item.상품명}</strong>
  //         <p>{item.상품카테고리}</p>
  //       </div>
  //       <p>{item.상품가격}</p>
  //       <p>{item.상품수량}</p>
  //       <p>{item.상품가격 * item.상품수량}</p>
  //     </div>
  //   );
  // });        !!!실제 구성될 제품정보 컴포넌트!!!

  //[{제품의 아이디, 제품의 수량}], [제품 합계 금액], [배송지 정보], [배송메세지]

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
        <p>1</p>
        <p>(+2500원)</p>
        <p>₩2,500</p>
      </div>
    </div>
  );
}

export default ProductInfo;
