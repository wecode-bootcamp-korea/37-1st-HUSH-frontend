import React from 'react';

function ProductCookie({ product }) {
  const { name, thumbnail_image_url, price, category_id } = product;

  return (
    <div className="product-product-inner-box">
      <div className="product-product-image-box">
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
      </div>
    </div>
  );
}

export default ProductCookie;
