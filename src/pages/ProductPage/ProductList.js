import React from 'react';

const ProductChocolate = ({ product }) => {
  const { stock, name, thumbnail_image_url, price, category_id } = product;

  return (
    <div
      className={`product-product-inner-box ${
        stock === '0' ? 'product-sold-out' : ''
      }`}
    >
      <a href="https://www.naver.com" className="product-link">
        <div className="thumb">
          <img
            className="product-product-image"
            src={thumbnail_image_url}
            alt="상품이미지"
          />
        </div>
        <div className="product-product-info">
          <p className="bold">{name}</p>
          <p>{category_id}</p>
          <p>{price}</p>
        </div>
      </a>
    </div>
  );
};

export default ProductChocolate;
