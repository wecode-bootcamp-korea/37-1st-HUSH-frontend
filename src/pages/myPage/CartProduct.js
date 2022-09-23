import React, { useState, useRef } from 'react';
import '../myPage/Cart.scss';

function CartProduct({ img, name, category, quantity, price, stock }) {
  price = Number(price);

  const productCheckbox = useRef();

  const [productQuantity, setProductQuantity] = useState(quantity);
  let totalSum = productQuantity * price;

  const changeQuantity = e => {
    if (e.target.className === 'quantity-minus-btn') {
      if (productQuantity <= 1) {
        alert('최소 구매가능 수량은 1개입니다.');
      } else {
        setProductQuantity(Number(productQuantity) - 1);
      }
    } else {
      if (productQuantity >= stock) {
        alert(`최대 구매가능 수량은 ${stock}개입니다.`);
      } else {
        setProductQuantity(Number(productQuantity) + 1);
      }
    }
  };

  return (
    <>
      <tr className="cart-product-content">
        <td className="product-content-input">
          <input type="checkbox" id="content-checkbox" ref={productCheckbox} />
        </td>
        <td className="product-content-detail">
          <img className="content-detail-img" src={img} alt="제품 이미지" />
          <div>
            <p className="content-detail-name">{name}</p>
            <p className="content-detail-category">{category}</p>
          </div>
        </td>
        <td className="product-content-quantity">
          <button className="quantity-minus-btn" onClick={changeQuantity} />
          <span className="quantity-count">{productQuantity}</span>
          <button className="quantity-plus-btn" onClick={changeQuantity} />
        </td>
        <td className="product-content-price">
          ₩ {price.toLocaleString('ko-KR')}
        </td>
        <td className="product-content-totalPrice">
          ₩ {totalSum.toLocaleString('ko-KR')}
        </td>
      </tr>
    </>
  );
}

export default CartProduct;
