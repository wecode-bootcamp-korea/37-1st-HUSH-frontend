import React, { useState, useEffect } from 'react';
import DetailPrdInfo from './DetailPrdInfo';
import DetailPrdReview from './DetailPrdReview';
import './DetailTab.scss';

function DetailTab() {
  const [activeIndex, setActiveIndex] = useState('제품정보');

  const tabCategories = [
    '제품정보',
    '제품후기',
    '배송/반품/교환 안내',
    '상품필수 정보',
  ];

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const tabContent = [
    {
      cartegory: '제품정보',
      content: <DetailPrdInfo />,
    },
    {
      cartegory: '제품후기',
      content: <DetailPrdReview />,
    },
    {
      cartegory: '배송/반품/교환 안내',
      content: <h2>준비 중 입니다.</h2>,
    },
    {
      cartegory: '상품필수 정보',
      content: <h2>준비 중 입니다.</h2>,
    },
  ];

  const [tabCont, setTabCont] = useState(tabContent);

  useEffect(() => {
    setTabCont(
      tabContent.filter(item => {
        if (activeIndex === item.cartegory) return true;
        return false;
      })
    );
  }, [activeIndex]);

  const getTabCont = (item, index) => {
    return (
      <div key={index} className="tab-cont-wrap">
        {item.content}
      </div>
    );
  };

  return (
    <>
      <div className="prd-tabs">
        <ul>
          {tabCategories.map(tab => (
            <li
              key={tab}
              className={`${activeIndex === tab ? 'active' : ''}`}
              onClick={() => setActiveIndex(tab)}
            >
              {tab}
            </li>
          ))}
        </ul>
      </div>
      <div className="tab-content">
        {tabCont.map((item, index) => getTabCont(item, index))}
      </div>
    </>
  );
}

export default DetailTab;
