import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Nav.scss';
import NavModal from './NavModal';

function Nav() {
  const navigate = useNavigate();

  const [onSearch, setOnsearch] = useState(false);

  const showModal = () => {
    setOnsearch(true);
  };
  const colseModal = () => {
    setOnsearch(false);
  };

  const goProduct = () => {
    navigate('../product');
  };
  const goMyPage = () => {
    navigate('../mypage');
  };

  return (
    <div className="navWrap">
      <div className="navAside">
        <p>2022 할로윈 에디션 입고 알림 OPEN!!</p>
      </div>
      <div className="navBody">
        <div className="navBodyLeft">
          <h1 className="navLogo">Hush</h1>
          <ul className="navMenu">
            <li>
              <a href="#!" onClick={goProduct}>
                제품
              </a>
            </li>
            <li>
              <a href="#!">러쉬소개</a>
            </li>
            <li>
              <a href="#!">매장안내</a>
            </li>
            <li>
              <a href="#!">스파</a>
            </li>
            <li>
              <a href="#!">이벤트</a>
            </li>
          </ul>
        </div>
        <ul className="navBodyRight">
          <li>
            <a className="pointInfo" href="#!">
              100,000<span>point</span>
            </a>
          </li>
          <li>
            <a href="#!">
              <img
                onClick={showModal}
                className="searchModalBtn"
                src={process.env.PUBLIC_URL + '/images/Nav/search.png'}
                alt="searchIcon"
              />
            </a>
          </li>
          <li>
            <a href="#!">
              <img
                className="basketPageBtn"
                src={process.env.PUBLIC_URL + '/images/Nav/basket.png'}
                alt="basketIcon"
              />
            </a>
          </li>
          <li>
            <a href="#!">
              <img
                className="loginPageBtn"
                onClick={goMyPage}
                src={process.env.PUBLIC_URL + '/images/Nav/login.png'}
                alt="loginIcon"
              />
            </a>
          </li>
        </ul>
      </div>
      {onSearch && <NavModal colseModal={colseModal} />}
    </div>
  );
}

export default Nav;
