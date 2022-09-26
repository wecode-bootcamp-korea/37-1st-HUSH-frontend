import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Nav.scss';
import NavModal from './NavModal';

function Nav() {
  const location = useLocation();

  const [isSearch, setIsSearch] = useState(false);
  const [isMenu, setIsMenu] = useState(false);
  const [isMenuImg, setIsMenuImg] = useState(false);

  const loginImg = ['/images/Nav/loginClick.png', '/images/Nav/login.png'];

  useEffect(() => {
    setIsMenu(false);
    setIsSearch(false);
  }, [location.pathname]);

  const showSearchToggle = () => {
    setIsSearch(Toggle => !Toggle);
  };
  const closeSearchModal = () => {
    setIsSearch(false);
  };

  const menuModalToggle = () => {
    setIsMenu(prev => !prev);
  };

  return (
    <div className="nav-wrap">
      <div className="nav-aside">
        <p>2022 갓혜린 에디션 입고 알림 OPEN!!</p>
      </div>
      <div className="nav-body">
        <div className="nav-body-left">
          <h1 className="nav-logo">
            <Link to="/" className="nav-logo-text">
              Hush
            </Link>
          </h1>
          <ul className="nav-menu">
            <li>
              <Link to="/product">제품</Link>
            </li>
            <li>
              <Link to="intro">허쉬소개</Link>
            </li>
            <li>
              <Link to="store">매장안내</Link>
            </li>
            <li>
              <Link to="/event">이벤트</Link>
            </li>
          </ul>
        </div>
        <ul className="nav-body-right">
          <li>
            <a className="point-info" href="#!">
              100,000
              <span>point</span>
            </a>
          </li>
          <li>
            <a href="#!">
              <img
                onClick={showSearchToggle}
                className="search-modal-btn"
                src="/images/Nav/search.png"
                alt="검색 아이콘"
              />
            </a>
          </li>
          <li>
            <Link to="/cart">
              <img
                className="basket-page-btn"
                src="/images/Nav/basket.png"
                alt="장바구니 아이콘"
              />
            </Link>
          </li>
          <li className="login-page-box">
            <a href="#!">
              <img
                className="login-page-btn"
                onMouseOver={() => setIsMenuImg(true)}
                onMouseOut={() => setIsMenuImg(false)}
                onClick={menuModalToggle}
                src={isMenuImg ? loginImg[0] : loginImg[1]}
                alt="텝메뉴 아이콘"
              />
            </a>
            {isMenu && (
              <div className="my-page-modal">
                <ul>
                  <li>
                    <Link to="/join">회원가입</Link>
                  </li>
                  <li>
                    <Link to="/login">로그인</Link>
                  </li>
                  <li>
                    <Link to="/detail">찜!</Link>
                  </li>
                </ul>
              </div>
            )}
          </li>
        </ul>
      </div>
      {isSearch && <NavModal closeModal={closeSearchModal} />}
    </div>
  );
}

export default Nav;
