import React from 'react';
import { Link } from 'react-router-dom';

const ProductChocolate = ({ product }) => {
  const { name, thumbnail_image_url, price, category_id } = product;

  return (
    <div className="product-product-inner-box">
      <a href="https://www.naver.com">
        <div className="thumb">
          <img
            className="product-product-image"
            src={thumbnail_image_url}
            alt="상품이미지"
          />
        </div>
      </a>
      <div className="product-product-info">
        <p className="bold">{name}</p>
        <p>{category_id}</p>
        <p>{price}</p>
      </div>
    </div>
  );
};
export default ProductChocolate;
