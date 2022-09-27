import React, { useEffect, useState } from 'react';
import '../myPage/Cart.scss';

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
}) {
  const [productQuantity, setProductQuantity] = useState(quantity);

  let totalSum = productQuantity * price;

  const decreaseQuantity = e => {
    if (productQuantity <= 1) {
      alert('최소 구매가능 수량은 1개입니다.');
    } else {
      setProductQuantity(productQuantity - 1);
    }
  };

  const increaseQuantity = e => {
    if (productQuantity >= stock) {
      alert(`최대 구매가능 수량은 ${stock}개입니다.`);
    } else {
      setProductQuantity(productQuantity + 1);
    }
  };

  useEffect(() => {
    fetch(
      `http://192.168.139.252:3000/cart/control?productId=${id}&quantity=${productQuantity}`,
      {
        method: 'POST',
        headers: {
          authorization:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwiaWF0IjoxNjY0MjUzMjA4fQ.e6QJvshaIsZpffahrwCXzpjwmBXSVB7tqPkXQiVu1cM',
        },
      }
    );
  }, [id, productQuantity]);

  return (
    <tr className="cart-prosduct-content" id={id}>
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
        <button className="quantity-minus-btn" onClick={decreaseQuantity} />
        <span className="quantity-count">{productQuantity}</span>
        <button className="quantity-plus-btn" onClick={increaseQuantity} />
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
