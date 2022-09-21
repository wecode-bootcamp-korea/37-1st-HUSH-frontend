import React from 'react';
import '../myPage/Cart.scss';

function CartProduct({ img, name, category, quantity, price }) {
  return (
    <>
      <tr className="cart-product-content">
        <td className="product-content-input">
          <input type="checkbox" id="content-checkbox" />
          {/* <label htmlFor="content-checkbox" /> */}
        </td>
        <td className="product-content-detail">
          <img className="content-detail-img" src={img} alt="제품 이미지" />
          <div>
            <p className="content-detail-name">{name}</p>
            <p className="content-detail-category">{category}</p>
          </div>
        </td>
        <td className="product-content-quantity">
          <button className="quantity-minus-btn" />
          {quantity}
          <button className="quantity-plus-btn" />
        </td>
        <td className="product-content-price">₩ {price}</td>
        <td className="product-content-totalPrice">₩ {quantity * price}</td>
      </tr>
      {/* <div></div> */}
    </>
  );
}

export default CartProduct;
