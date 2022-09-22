import React from 'react';

const ProductChocolate = ({ product }) => {
  const { name, img_id, price, category_id } = product;

  return (
    <div className="product-product-inner-box">
      <div className="thumb">
        <img className="product-product-image" src={img_id} alt="상품이미지" />
      </div>
      <div className="product-product-info">
        <p className="bold">{name}</p>
        <p>{category_id}</p>
        <p>{price}</p>
      </div>
    </div>
  );
};
export default ProductChocolate;
