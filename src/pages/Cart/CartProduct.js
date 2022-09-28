import React from 'react';
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
  accessToken,
}) {
  let totalSum = quantity * price;

  const decreaseQuantity = () => {
    if (quantity <= 1) {
      alert('최소 구매가능 수량은 1개입니다.');
    } else {
      fetch(
        `http://172.20.10.6:3000/cart/control?productId=${id}&quantity=${
          quantity - 1
        }`,
        {
          method: 'POST',
          headers: {
            authorization: accessToken,
          },
        }
      )
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          throw new Error('에러 발생!');
        })
        .catch(error => {
          alert(error);
        })
        .then(data => {
          setProductData(data.result);
        });
    }
  };

  const increaseQuantity = () => {
    if (quantity >= stock) {
      alert(`최대 구매가능 수량은 ${stock}개입니다.`);
    } else {
      fetch(
        `http://172.20.10.6:3000/cart/control?productId=${id}&quantity=${
          quantity + 1
        }`,
        {
          method: 'POST',
          headers: {
            authorization: accessToken,
          },
        }
      )
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          throw new Error('에러 발생!');
        })
        .catch(error => {
          alert(error);
        })
        .then(data => {
          setProductData(data.result);
        });
    }
  };

  return (
    <tr className="cart-product-content">
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
        <span className="quantity-count">{quantity}</span>
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
