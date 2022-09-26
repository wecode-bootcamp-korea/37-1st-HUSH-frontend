import React, { useState, useEffect } from 'react';
import LikeProduct from './LikeProduct';
import '../myPage/Like.scss';

function Like() {
  const [productData, setProductData] = useState([]);
  const [checkedList, setCheckedList] = useState([]);

  useEffect(() => {
    fetch('/data/cart.json', {
      headers: {
        authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwiaWF0IjoxNjYzOTE2MjQ3fQ.au4JgHfu9_Js-l3eaPHyh-UrsAGQ1Wily3XSKh3VzH4',
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
    setCheckedList([]);
  };

  return (
    <div className="like">
      <h1 className="like-title">찜목록</h1>
      <table className="like-product">
        <thead className="like-product-head">
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
            <th className="head-text">금액</th>
            <th className="head-text">선택</th>
          </tr>
        </thead>
        <tbody className="like-product-body">
          {productData.map(product => (
            <LikeProduct
              key={product.pId}
              id={product.pId}
              img={product.url}
              name={product.pName}
              category={product.cName}
              price={product.price}
              handleSingleChecked={handleSingleChecked}
              checkedList={checkedList}
            />
          ))}
        </tbody>
      </table>
      <button className="like-delete-btn" onClick={deleteChecked}>
        선택 삭제
      </button>
    </div>
  );
}

export default Like;
