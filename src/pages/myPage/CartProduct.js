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
  changeQuantity,
  handleTotalSum,
}) {
  const [productQuantity, setProductQuantity] = useState(quantity);

  let totalSum = productQuantity * price;

  const decreaseQuantity = e => {
    if (productQuantity <= 1) {
      alert('최소 구매가능 수량은 1개입니다.');
    } else {
      setProductQuantity(productQuantity - 1);
      // fetch('api 주소', {
      //   method: 'PATCH',
      //   headers: {
      //     authorization: '',
      //   },
      // });
    }
  };

  const increaseQuantity = e => {
    if (productQuantity >= stock) {
      alert(`최대 구매가능 수량은 ${stock}개입니다.`);
    } else {
      setProductQuantity(productQuantity + 1);
      // fetch('api 주소', {
      //   method: 'PATCH',
      //   headers: {
      //     authorization: '',
      //   },
      // });
    }
  };

  useEffect(() => {
    changeQuantity(id, 'quantity', setProductQuantity);
  }, [productQuantity]);

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
