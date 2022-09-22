import React from 'react';
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
            <h2 className="prd-tit-name">섹스밤</h2>
            <p className="prd-cat-name">배쓰 밤</p>
          </div>
          <div className="prd-price-box">
            <span className="price"> ￦ 14,000</span>
            <div className="quantity-box" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
