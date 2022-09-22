import React from 'react';

function ProductAll({ product }) {
  const { name, img_id, price, category_id } = product;
  return (
    <div>
      <div className="product-product-outer-box">
        <div className="product-product-box">
          <div className="product-product-inner-box">
            <div className="product-product-image-box">
              <div className="thumb">
                <img
                  className="product-product-image"
                  src={img_id}
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
        </div>
      </div>
    </div>
  );
}

export default ProductAll;