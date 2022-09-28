import React, { useState } from 'react';
import './CartProduct.scss';

function CartProduct({
  id,
  img,
  name,
  category,
  quantity,
  price,
  stock,
  handleSingleChecked,
  checkedList,
  setProductData,
}) {
  const [productQuantity, setProductQuantity] = useState(quantity);

  let totalSum = productQuantity * price;

  const decreaseQuantity = e => {
    if (productQuantity <= 1) {
      alert('최소 구매가능 수량은 1개입니다.');
    } else {
      setProductQuantity(productQuantity - 1);
      fetch(
        `http://172.20.10.6:3000/cart/control?productId=${id}&quantity=${productQuantity}`,
        {
          method: 'POST',
          headers: {
            authorization:
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwiaWF0IjoxNjY0MjQ3MDUxfQ.fQgK5vlmrDiR7ulT-FJLKOyFKu0n5BwesGs885z82To',
          },
        }
      )
        .then(response => response.json())
        .then(data => {
          setProductData(data.result);
        });
    }
  };

  const increaseQuantity = e => {
    if (productQuantity >= stock) {
      alert(`최대 구매가능 수량은 ${stock}개입니다.`);
    } else {
      setProductQuantity(productQuantity + 1);
      fetch(
        `http://172.20.10.6:3000/cart/control?productId=${id}&quantity=${productQuantity}`,
        {
          method: 'POST',
          headers: {
            authorization:
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwiaWF0IjoxNjY0MjQ3MDUxfQ.fQgK5vlmrDiR7ulT-FJLKOyFKu0n5BwesGs885z82To',
          },
        }
      )
        .then(response => response.json())
        .then(data => {
          setProductData(data.result);
        });
    }
  };

  return (
    <tr className="cart-product-content" id={id}>
      <td className="product-content-input">
        <input
          type="checkbox"
          id={id}
          checked={checkedList.includes(id)}
          onChange={handleSingleChecked}
        />
      </td>
      <td className="product-content-detail">
        <img className="content-detail-img" src={img} alt="제품 이미지" />
        <div>
          <p className="content-detail-name">{name}</p>
          <p className="content-detail-category">{category}</p>
        </div>
      </td>
      <td className="product-content-quantity">
        <button className="quantity-btn minus-btn" onClick={decreaseQuantity} />
        <span className="quantity-count">{productQuantity}</span>
        <button className="quantity-btn plus-btn" onClick={increaseQuantity} />
      </td>
      <td className="product-content-price">
        ₩ {price.toLocaleString('ko-KR')}
      </td>
      <td className="product-content-totalPrice">
        ₩ {totalSum.toLocaleString('ko-KR')}
      </td>
    </tr>
  );
}

export default CartProduct;