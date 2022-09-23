import React from 'react';
import DetailTab from './DetailTab';
import './Detail.scss';

function Detail() {
  return (
    <div className="detail-content">
      <div className="detail-wrap">
        <div className="detail-prd-img">
          <span>
            <img src="./images/prod1.jpg" alt="" />
          </span>
        </div>
        <div className="detail-prd-info">
          <div className="thumb">
            <span>
              <img src="./images/prod1.jpg" alt="" />
            </span>
          </div>
          <div className="detail-prd-names">
            <h2 className="prd-tit-name">사이클 롭스</h2>
            <p className="prd-cat-name">배쓰 밤</p>
          </div>
          <div className="prd-price-box">
            <strong className="price"> ￦ 14,000</strong>
            <div className="quantity-box">
              <button type="button" className="minus">
                <img src="./images/minus_ico.png" alt="-" />
              </button>
              <input type="text" defaultValue="1" className="quantity-num" />
              <button type="button" className="plus">
                <img src="./images/plus_ico.png" alt="+" />
              </button>
            </div>
          </div>
          <div className="total-price">
            <span className="total-title">총 합계 금액</span>
            <p>￦ 15,000</p>
          </div>
          <div className="prd-bbutton-box">
            <button type="button" className="lick-btn">
              <img src="./images/heart.png" alt="찜 목록" />
            </button>
            <button type="button" className="basket-btn">
              장바구니
            </button>
          </div>
        </div>
      </div>
      <div className="prd-detail">
        <DetailTab />
      </div>
    </div>
  );
}

export default Detail;
