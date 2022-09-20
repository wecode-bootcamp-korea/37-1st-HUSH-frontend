import React from 'react';

function ProductButton() {
  return (
    <div>
      <div className="detail-button-box">
        <button className="detail-button">
          <span>초콜릿</span>
        </button>
        <button className="detail-button">
          <span>젤리</span>
        </button>
        <button className="detail-button">
          <span>캔디</span>
        </button>
        <button className="detail-button">
          <span>쿠키</span>
        </button>
        <button className="detail-button">
          <span>케이크</span>
        </button>
      </div>
    </div>
  );
}

export default ProductButton;
