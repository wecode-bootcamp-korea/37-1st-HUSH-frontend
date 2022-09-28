import React, { useState } from 'react';

function DetailTopInfo({ name, price, stock, category_name, image_url }) {
  const [number, setNumber] = useState(1);

  const onIncrease = () => {
    if (number === stock) {
      setNumber(stock);
      alert(`최대 구매 가능 수량은 ${stock}개 입니다.`);

      return;
    }
    setNumber(number + 1);
  };

  const onDecrease = () => {
    if (number === 1) {
      setNumber(1);
      alert('해당 제품의 최소 구매 수량은 1개 입니다.');

      return;
    }

    setNumber(number - 1);
  };

  const handleChange = e => {
    setNumber(e.target.value);
  };

  const calculatePrice = number * price;

  return (
    <>
      <div className="detail-prd-img">
        <span>{/* <img src={image_url[0]} alt="" /> */}</span>
      </div>
      <div className="detail-prd-info">
        <div className="thumb">
          <span>{/* <img src={image_url[1]} alt="" /> */}</span>
        </div>
        <div className="detail-prd-names">
          <h2 className="prd-tit-name">{name}</h2>
          <p className="prd-cat-name">{category_name}</p>
        </div>
        <div className="prd-price-box">
          <strong className="price"> ￦ {price}</strong>
          <div className="quantity-box">
            <button type="button" className="minus" onClick={onDecrease}>
              <img src="./images/detail/minus_ico.png" alt="-" />
            </button>
            <input
              type="text"
              value={number}
              onChange={handleChange}
              className="quantity-num"
            />
            <button type="button" className="plus" onClick={onIncrease}>
              <img src="./images/detail/plus_ico.png" alt="+" />
            </button>
          </div>
        </div>
        <div className="total-price">
          <span className="total-title">총 합계 금액</span>
          <p>￦ {calculatePrice}</p>
        </div>
        <div className="prd-button-box">
          <button type="button" className="lick-btn">
            <img src="./images/detail/heart.png" alt="찜 목록" />
          </button>
          <button type="button" className="basket-btn">
            장바구니
          </button>
        </div>
      </div>
    </>
  );
}

export default DetailTopInfo;
