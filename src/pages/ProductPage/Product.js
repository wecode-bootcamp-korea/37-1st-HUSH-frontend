import React, { useState, useEffect } from 'react';
import ProductAll from './ProductAll';
import ProductChocolate from './ProductChocolate';
import ProductJelly from './ProductJelly';
import ProductCandy from './ProductCandy';
import ProductCookie from './ProductCookie';
import ProductCake from './ProductCake';
import Dropdown from './Dropdown';
import './Product.scss';

function Product() {
  const [all, setAll] = useState([]);
  const [chocolates, setChocolate] = useState([]);
  const [jelly, setJelly] = useState([]);
  const [candy, setCandy] = useState([]);
  const [cookie, setCookie] = useState([]);
  const [cake, setCake] = useState([]);
  const [filter, setFilter] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [dropdownMenu, setDropDownMenu] = useState(false);

  useEffect(() => {
    fetch('/data/all.json')
      .then(response => response.json())
      .then(result => setAll(result));
  }, []);

  useEffect(() => {
    fetch('/data/chocolate.json')
      .then(response => response.json())
      .then(result => setChocolate(result));
  }, []);

  useEffect(() => {
    fetch('/data/candy.json')
      .then(response => response.json())
      .then(result => setCandy(result));
  }, []);

  useEffect(() => {
    fetch('/data/jelly.json')
      .then(response => response.json())
      .then(result => setJelly(result));
  }, []);

  useEffect(() => {
    fetch('/data/cookie.json')
      .then(response => response.json())
      .then(result => setCookie(result));
  }, []);

  useEffect(() => {
    fetch('/data/cake.json')
      .then(response => response.json())
      .then(result => setCake(result));
  }, []);

  // tab
  const tabContArr = [
    {
      tabTitle: (
        <ul
          className={`${'tabs'} ${activeIndex === 0 ? 'is-active' : ''}`}
          onClick={() => tabClickHandler(0)}
        >
          <li className="product-tab-name">전체</li>
        </ul>
      ),
      tabCont: (
        <div>
          {all.map((product, all) => {
            return (
              <div className="detail-product-outer-cont" key={all}>
                <ProductAll product={product} />
              </div>
            );
          })}
        </div>
      ),
    },

    {
      tabTitle: (
        <ul
          className={`${'tabs'} ${activeIndex === 0 ? 'is-active' : ''}`}
          onClick={() => tabClickHandler(1)}
        >
          <li className="product-tab-name">초콜릿</li>
        </ul>
      ),
      tabCont: (
        <div>
          {chocolates.map((product, chocolate) => {
            return (
              <div className="detail-product-outer-cont" key={chocolate}>
                <ProductChocolate product={product} />
              </div>
            );
          })}
        </div>
      ),
    },

    {
      tabTitle: (
        <ul
          className={`${'tabs'} ${activeIndex === 0 ? 'is-active' : ''}`}
          onClick={() => tabClickHandler(2)}
        >
          <li className="product-tab-name">젤리</li>
        </ul>
      ),
      tabCont: (
        <div>
          {jelly.map((product, jelly) => {
            return (
              <div className="detail-product-outer-cont" key={jelly}>
                <ProductJelly product={product} />
              </div>
            );
          })}
        </div>
      ),
    },

    {
      tabTitle: (
        <ul
          className={`${'tabs'} ${activeIndex === 0 ? 'is-active' : ''}`}
          onClick={() => tabClickHandler(3)}
        >
          <li className="product-tab-name">캔디</li>
        </ul>
      ),
      tabCont: (
        <div>
          {candy.map((product, candy) => {
            return (
              <div className="detail-product-outer-cont" key={candy}>
                <ProductCandy product={product} />
              </div>
            );
          })}
        </div>
      ),
    },

    {
      tabTitle: (
        <ul
          className={`${'tabs'} ${activeIndex === 0 ? 'is-active' : ''}`}
          onClick={() => tabClickHandler(4)}
        >
          <li className="product-tab-name">쿠키</li>
        </ul>
      ),
      tabCont: (
        <div>
          {cookie.map((product, cookie) => {
            return (
              <div className="detail-product-outer-cont" key={cookie}>
                <ProductCookie product={product} />
              </div>
            );
          })}
        </div>
      ),
    },

    {
      tabTitle: (
        <ul
          className={`${'tabs'} ${activeIndex === 0 ? 'is-active' : ''}`}
          onClick={() => tabClickHandler(5)}
        >
          <li className="product-tab-name">케이크</li>
        </ul>
      ),
      tabCont: (
        <div>
          {cake.map((product, cake) => {
            return (
              <div className="detail-product-outer-cont" key={cake}>
                <ProductCake product={product} />
              </div>
            );
          })}
        </div>
      ),
    },
  ];

  const tabClickHandler = index => {
    setActiveIndex(index);
  };

  const filterItemIncrease = event => {
    setFilter(event.target.value);
    const priceSorting = [...chocolates];
    const priceCompare = key => (a, b) => {
      // return a[key] > b[key] ? 1 : a[key] > b[key] ? -1 : 0;
      return a[key] - b[key];
    };
    priceSorting.sort(priceCompare('price'));
    setChocolate(priceSorting);
    console.log('클릭');
  };

  const filterItemDecrease = event => {
    setFilter(event.target.value);
    const priceSorting = [...chocolates];
    const priceCompare = key => (a, b) => {
      // return a[key] > b[key] ? -1 : a[key] < b[key] ? -1 : 0;
      return b[key] - a[key];
    };
    priceSorting.sort(priceCompare('price'));
    setChocolate(priceSorting);
    console.log('클릭');
  };

  // fetch

  return (
    <section className="product">
      <div className="product-nav">네브바</div>
      <div className="product-pic">
        <img src="./images/cup.jpg" alt="상품메인이미지" />
        <div className="product-image-letter">
          <h2>허쉬</h2>
        </div>
      </div>

      <div className="products-tabs-cont">
        <div className="products-tabs">
          {tabContArr.map((section, index) => {
            return section.tabTitle;
          })}
        </div>
      </div>

      {/* 필터링 드랍다운 */}
      <div className="product-tog-cont">
        <div className="product-toggle">
          <button
            className="product-btn"
            onClick={e => setDropDownMenu(!dropdownMenu)}
          >
            {dropdownMenu ? '필터링' : '필터링'}
          </button>
          <div>
            <Dropdown visibility={dropdownMenu}>
              <ul className="product-dropdown">
                <button
                  className="product-dropdown-btn"
                  onClick={filterItemIncrease}
                >
                  <li>낮은가격순</li>
                </button>

                <button
                  className="product-dropdown-btn"
                  onClick={filterItemDecrease}
                >
                  <li>높은가격순</li>
                </button>

                <button className="product-dropdown-btn">
                  <li>인기순</li>
                </button>

                <button className="product-dropdown-btn">
                  <li>추천순</li>
                </button>
              </ul>
            </Dropdown>
          </div>
        </div>
      </div>
      {/* -------- */}

      <div className="detail-product-wrap">
        {tabContArr[activeIndex].tabCont}
      </div>

      {/* footer button */}
      <div className="product-footer-button">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button> &gt;</button>
        <button> &gt;&gt;</button>
      </div>
    </section>
  );
}

export default Product;
