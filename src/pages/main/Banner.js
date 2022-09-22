import React from 'react';
import useScrollFadeIn from './useScrollFadeIn';
import './Banner.scss';

function Banner() {
  const animatedItem = {
    0: useScrollFadeIn('up', 1, 0.6),
    1: useScrollFadeIn('up', 1, 0.7),
  };

  return (
    <div className="main-banner">
      <div className="contain">
        <div className="banner-box" {...animatedItem[0]}>
          <div className="banner-img">
            <img src="./images/banner1.jpg" alt="배너 쿠키 이미지" />
          </div>
          <div className="banner-txt">
            <h2>쿠키</h2>
            <p>식사는 없어 배고파도 음료는 없어 </p>
            <p>목말라도 달콤한 맛만 디저트만 만 원하게 될 거 알잖아</p>
          </div>
        </div>
        <div className="banner-box" {...animatedItem[1]}>
          <div className="banner-img">
            <img src="./images/banner2.jpg" alt="배너 쿠키 이미지" />
          </div>
          <div className="banner-txt">
            <h2>마카롱</h2>
            <p>식사는 없어 배고파도 음료는 없어 </p>
            <p>목말라도 달콤한 맛만 디저트만 만 원하게 될 거 알잖아</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
