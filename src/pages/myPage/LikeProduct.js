import React from 'react';
import '../myPage/Like.scss';

function LikeProduct({
  id,
  img,
  name,
  category,
  price,
  handleSingleChecked,
  checkedList,
}) {
  return (
    <tr className="like-product-content" id={id}>
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
      <td className="product-content-price">
        ₩ {price.toLocaleString('ko-KR')}
      </td>
      <td className="product-content-select">
        <button
          className="content-select-btn"
          onClick={() => {
            return alert('준비중입니다!');
          }}
        >
          제품보기
        </button>
      </td>
    </tr>
  );
}

export default LikeProduct;
