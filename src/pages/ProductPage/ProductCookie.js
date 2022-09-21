import React from 'react';

function ProductCookie({ product }) {
  const { name, img_id, price, category_id } = product;
  // const { name1, price1, category_id1 } = product;
  // const { name2, price2, category_id2 } = product;
  // const { name3, price3, category_id3 } = product;

  return (
    <div className="product-product-outer-box">
      <div className="product-product-box">
        <div className="product-product-inner-box">
          <div className="product-product-image-box">
            <div className="thumb">
              <img className="product-product-image" src={img_id} />
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
  );
}

export default ProductCookie;
