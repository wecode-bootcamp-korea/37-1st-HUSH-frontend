import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProductChocolate = ({ product }) => {
  const [soldOutItem, setSoldOut] = useState(0);
  const { stock, name, thumbnail_image_url, price, category_name } = product;

  // const soldOutItem = (key) => {
  //   if (.count === 0) {
  //     return alert('품절입니다');
  //   }
  const soldOut = event => {
    setSoldOut(event.target.value);
    console.log('클릿');
    if (soldOutItem === undefined) {
      alert('품절되었습니다');
    }
  };
  return (
    <div className="product-product-inner-box">
      <a href="https://www.naver.com" onClick={soldOut}>
        {/* <button href="https://www.naver.com" onClick={soldOut}> */}
        <div className="thumb">
          <img
            className="product-product-image"
            src={thumbnail_image_url}
            alt="상품이미지"
          />
        </div>
        {/* </button> */}
      </a>
      <div className="product-product-info">
        <p className="bold">{name}</p>
        <p>{category_name}</p>
        <p>{price}</p>
      </div>
    </div>
  );
};

export default ProductChocolate;

// const soldOutItem = (key) ={
//   if(key.count === 0 ? 'soldOut': '')

// }
