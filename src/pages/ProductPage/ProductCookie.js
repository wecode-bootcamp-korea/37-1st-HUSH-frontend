import React from 'react';

function ProductCookie({ product }) {
  const { name, img_id, price, category_id } = product;
  const { name1, price1, category_id1 } = product;
  const { name2, price2, category_id2 } = product;
  const { name3, price3, category_id3 } = product;

  return (
    <div>
      <div className="detail-product-outer-box">
        <div className="detail-product-box">
          <div className="detail-product-inner-box">
            <div className="detail-product-image-box">
              <img className="detail-product-image" src={img_id} />
              <div className="detail-product-info">
                <p className="bold">{name}</p>
                <p>{category_id}</p>
                <p>{price}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="detail-product-box">
          <div className="detail-product-inner-box">
            <div className="detail-product-image-box">
              <img className="detail-product-image" src={img_id} />
              <div className="detail-product-info">
                <p className="bold">{name1}</p>
                <p>{category_id1}</p>
                <p>{price1}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="detail-product-box">
          <div className="detail-product-inner-box">
            <div className="detail-product-image-box">
              <img className="detail-product-image" src={img_id} />
              <div className="detail-product-info">
                <p className="bold">{name2}</p>
                <p>{category_id2}</p>
                <p>{price2}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="detail-product-box">
          <div className="detail-product-inner-box">
            <div className="detail-product-image-box">
              <img className="detail-product-image" src={img_id} />
              <div className="detail-product-info">
                <p className="bold">{name3}</p>
                <p>{category_id3}</p>
                <p>{price3}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCookie;
