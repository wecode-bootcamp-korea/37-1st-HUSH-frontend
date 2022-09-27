import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CartProduct from './CartProduct';
import '../myPage/Cart.scss';

function Cart() {
  const navigate = useNavigate();
  const [productData, setProductData] = useState([]);
  const [checkedList, setCheckedList] = useState([]);

  useEffect(() => {
    fetch('/data/cart.json', {
      headers: {
        authorization: '',
      },
    })
      .then(res => {
        if (res) {
          return res.json();
        }
        throw new Error('에러 발생!');
      })
      .catch(error => {
        alert(error);
      })
      .then(data => {
        setProductData(data);
      });
  }, []);

  const handleSingleChecked = e => {
    if (e.target.checked) {
      setCheckedList([...checkedList, Number(e.target.id)]);
    } else if (!e.target.checked) {
      setCheckedList(checkedList.filter(el => el !== Number(e.target.id)));
    }
  };

  const handleAllChecked = e => {
    if (e.target.checked) {
      let newArr = [];
      productData.forEach(el => newArr.push(el.pId));
      setCheckedList(newArr);
    } else {
      setCheckedList([]);
    }
  };

  const deleteChecked = () => {
    let filtered = productData.filter(el => {
      return !checkedList.includes(el.pId);
    });
    setProductData(filtered);
    fetch(`http://192.168.139.252:3000/cart/delete?${checkedQueryString()}`, {
      method: 'DELETE',
      headers: {
        authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwiaWF0IjoxNjY0MjQ3MDUxfQ.fQgK5vlmrDiR7ulT-FJLKOyFKu0n5BwesGs885z82To',
      },
    });
    setCheckedList([]);
  };

  const likeChecked = () => {
    fetch(`http://192.168.139.252:3000/cart?${checkedQueryString()}`, {
      headers: {
        authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwiaWF0IjoxNjY0MjQ3MDUxfQ.fQgK5vlmrDiR7ulT-FJLKOyFKu0n5BwesGs885z82To',
      },
    });
    navigate('/like');
  };

  const checkedQueryString = () => {
    let checkedProducts = '';
    for (let i = 0; i < checkedList.length; i++) {
      checkedProducts += `product_id=${checkedList[i]}&`;
    }
    return checkedProducts.slice(0, checkedProducts.length - 1);
  };

  const orderProduct = () => {
    fetch(`http://192.168.139.252:3000/cart/order?${checkedQueryString()}`, {
      headers: {
        authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwiaWF0IjoxNjY0MjQ3MDUxfQ.fQgK5vlmrDiR7ulT-FJLKOyFKu0n5BwesGs885z82To',
      },
    });
    navigate('/payPage', { state: { product_id: checkedList } });
  };

  return (
    <div className="cart">
      <h1 className="cart-title">장바구니</h1>
      <div className="cart-subTitle">일반배송</div>
      <table className="cart-product">
        <thead className="cart-product-head">
          <tr>
            <th>
              <input
                className="head-checkbox"
                type="checkbox"
                id="checkbox"
                checked={checkedList.length === productData.length}
                onChange={handleAllChecked}
              />
              <label htmlFor="checkbox" />
            </th>
            <th className="head-text-info">제품 정보</th>
            <th className="head-text">수량</th>
            <th className="head-text">금액</th>
            <th className="head-text-total">합계금액</th>
          </tr>
        </thead>
        <tbody className="cart-product-body">
          {productData.map(product => (
            <CartProduct
              key={product.pId}
              id={product.pId}
              img={product.url}
              name={product.pName}
              category={product.cName}
              quantity={product.quantity}
              price={product.price}
              stock={product.pStock}
              handleSingleChecked={handleSingleChecked}
              checkedList={checkedList}
            />
          ))}
        </tbody>
      </table>
      <button className="cart-delete-btn" onClick={deleteChecked}>
        선택 삭제
      </button>
      <button className="cart-like-btn" onClick={likeChecked}>
        선택 찜하기
      </button>
      <ul className="cart-calc">
        <li>
          <span className="calc-title">선택제품</span>
          <span className="calc-count">{checkedList.length} 개</span>
        </li>
        <li>
          <span className="calc-title">제품합계</span>
          <span className="calc-sum">₩ 0</span>
        </li>
        <li>
          <span className="calc-title cal-title-shift">배송비</span>
          <span className="calc-sum">무료</span>
        </li>
        <li>
          <span className="calc-title">주문금액</span>
          <span className="calc-sum">₩ 0</span>
        </li>
      </ul>
      <div>
        <button className="cart-shop-btn">쇼핑 계속하기</button>
        <button className="cart-pay-btn" onClick={orderProduct}>
          주문하기
        </button>
      </div>
    </div>
  );
}

export default Cart;
