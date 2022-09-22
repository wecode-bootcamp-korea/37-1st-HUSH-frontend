import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Nav.scss';
import NavModal from './NavModal';

function Nav() {
  const [onSearch, setOnSearch] = useState(false);
  const [onMenu, setOnmenu] = useState(false);

  const showSearchToggle = () => {
    setOnSearch(Toggle => !Toggle);
  };
  const closeSearchModal = () => {
    setOnSearch(false);
  };

  const menuModalToggle = () => {
    setOnmenu(Toggle => !Toggle);
  };

  const navigate = useNavigate();

  const goProduct = () => {
    navigate('../product');
  };
  const goLogin = () => {
    navigate('../login');
  };

  const goJoin = () => {
    navigate('../join');
  };

  const goMypage = () => {
    navigate('../mypage');
  };

  const [loginChange, setLoginChange] = useState(false);
  const loginImg = [
    process.env.PUBLIC_URL + '/images/Nav/loginClick.png',
    process.env.PUBLIC_URL + '/images/Nav/login.png',
  ];

  return (
    <div className="nav-Wrap">
      <div className="nav-Aside">
        <p>2022 할로윈 에디션 입고 알림 OPEN!!</p>
      </div>
      <div className="nav-Body">
        <div className="nav-Body-Left">
          <h1 className="nav-Logo">Hush</h1>
          <ul className="nav-Menu">
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
        <ul className="nav-Body-Right">
          <li>
            <a className="point-Info" href="#!">
              100,000
              <span>point</span>
            </a>
          </li>
          <li>
            <a href="#!">
              <img
                onClick={showSearchToggle}
                className="search-Modal-Btn"
                src={process.env.PUBLIC_URL + '/images/Nav/search.png'}
                alt="search-Icon"
              />
            </a>
          </li>
          <li>
            <a href="#!">
              <img
                className="basket-Page-Btn"
                src={process.env.PUBLIC_URL + '/images/Nav/basket.png'}
                alt="basket-Icon"
              />
            </a>
          </li>
          <li className="login-Page-box">
            <a href="#!">
              <img
                className="login-Page-Btn"
                onMouseOver={() => setLoginChange(true)}
                onMouseOut={() => setLoginChange(false)}
                onClick={menuModalToggle}
                src={loginChange ? loginImg[0] : loginImg[1]}
                alt="login-Icon"
              />
            </a>
            {onMenu && (
              <div className="my-Page-Modal">
                <ul>
                  <li>
                    <a href="#!" onClick={goJoin}>
                      회원가입
                    </a>
                  </li>
                  <li>
                    <a href="#!" onClick={goLogin}>
                      로그인
                    </a>
                  </li>
                  <li>
                    <a href="#!" onClick={goMypage}>
                      찜!
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </li>
        </ul>
      </div>
      {onSearch && <NavModal colseModal={closeSearchModal} />}
    </div>
  );
}

export default Nav;
