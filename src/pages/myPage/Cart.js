import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CartProduct from './CartProduct';
import '../myPage/Cart.scss';

function Cart() {
  const navigate = useNavigate();
  const [productData, setProductData] = useState([]);
  const [checkedList, setCheckedList] = useState([]);
  const [totalSum, setTotalSum] = useState(0);

  useEffect(() => {
    fetch('/data/cart.json', {
      headers: {
        authorization: '',
      },
    })
      .then(response => response.json())
      .then(data => {
        setProductData(data);
      });
  }, []);

  const handleSingleChecked = e => {
    if (e.target.checked) {
      setCheckedList([...checkedList, Number(e.target.id)]);
    } else {
      setCheckedList(checkedList.filter(el => el !== Number(e.target.id)));
    }
  };

  const handleAllChecked = e => {
    if (e.target.checked) {
      let allCheckedList = [];
      productData.forEach(el => allCheckedList.push(el.pId));
      setCheckedList(allCheckedList);
    } else {
      setCheckedList([]);
    }
  };

  const deleteChecked = () => {
    fetch(`http://192.168.139.252:3000/cart?${checkedQueryString()}`, {
      method: 'DELETE',
      headers: {
        authorization: '',
      },
    })
      .then(response => response.json())
      .then(data => {
        setProductData(data.result);
      });
    setCheckedList([]);
  };

  useEffect(() => {
    let sum = 0;
    for (let i = 0; i < productData.length; i++) {
      for (let j = 0; j < checkedList.length; j++) {
        if (productData[i].pId === checkedList[j]) {
          sum += productData[i].price * productData[i].quantity;
        }
      }
    }
    setTotalSum(sum);
  }, [checkedList]);

  const checkedQueryString = () => {
    let checkedProducts = '';
    for (let i = 0; i < checkedList.length; i++) {
      checkedProducts += `productId=${checkedList[i]}&`;
    }
    return checkedProducts.slice(0, checkedProducts.length - 1);
  };

  const orderProduct = () => {
    navigate('/paypage', { state: { product_id: checkedList } });
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
              setProductData={setProductData}
              key={product.pId}
              id={product.pId}
              img={product.url}
              name={product.pName}
              category={product.cateName}
              quantity={product.quantity}
              price={product.price}
              stock={product.pStock}
              handleSingleChecked={handleSingleChecked}
              checkedList={checkedList}
            />
          ))}
        </tbody>
      </table>
      {productData.length < 1 && (
        <div className="product-empty">
          <img className="empty-img" src="/images/like/sad.png" alt="아이콘" />
          <p className="empty-text">아직 장바구니에 담긴 제품이 없네요!</p>
        </div>
      )}
      {productData.length > 0 && (
        <button className="cart-delete-btn" onClick={deleteChecked}>
          선택 삭제
        </button>
      )}

      <ul className="cart-calc">
        <li>
          <span className="calc-title">선택제품</span>
          <span className="calc-count">{checkedList.length} 개</span>
        </li>
        <li>
          <span className="calc-title">제품합계</span>
          <span className="calc-sum">₩ {totalSum.toLocaleString('ko-KR')}</span>
        </li>
        <li>
          <span className="calc-title cal-title-shift">배송비</span>
          <span className="calc-sum">무료</span>
        </li>
        <li>
          <span className="calc-title">주문금액</span>
          <span className="calc-sum">₩ {totalSum.toLocaleString('ko-KR')}</span>
        </li>
      </ul>
      <div>
        <button className="cart-btn shop-btn">쇼핑 계속하기</button>
        <button className="cart-btn pay-btn" onClick={orderProduct}>
          주문하기
        </button>
      </div>
    </div>
  );
}

export default Cart;
