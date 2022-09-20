import React, { useState, useEffect } from 'react';
import ProductChocolate from './ProductChocolate';
import ProductJelly from './ProductJelly';
import ProductCandy from './ProductCandy';
import ProductCookie from './ProductCookie';
import ProductCake from './ProductCake';
// import DetailButton from './DetailButton';
import './Product.scss';

function Product() {
  const [chocolates, setChocolate] = useState([]);
  const [jelly, setJelly] = useState([]);
  const [candy, setCandy] = useState([]);
  const [cookie, setCookie] = useState([]);
  const [cake, setCake] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const tabContArr = [
    {
      tabTitle: (
        <ul
          className={activeIndex === 0 ? 'is-active' : ''}
          onClick={() => tabClickHandler(0)}
        >
          <li className="product-tab-name">초콜릿</li>
        </ul>
      ),
      tabCont: (
        <div>
          {chocolates.map((product, chocolate) => {
            return (
              <div className="detail-product-outer-box" key={chocolate}>
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
          className={activeIndex === 0 ? 'is-active' : ''}
          onClick={() => tabClickHandler(1)}
        >
          <li className="product-tab-name">젤리</li>
        </ul>
      ),
      tabCont: (
        <div>
          {jelly.map((product, jelly) => {
            return (
              <div className="detail-product-outer-box" key={jelly}>
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
          className={activeIndex === 0 ? 'is-active' : ''}
          onClick={() => tabClickHandler(2)}
        >
          <li className="product-tab-name">캔디</li>
        </ul>
      ),
      tabCont: (
        <div>
          {candy.map((product, candy) => {
            return (
              <div className="detail-product-outer-box" key={candy}>
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
          className={activeIndex === 0 ? 'is-active' : ''}
          onClick={() => tabClickHandler(3)}
        >
          <li className="product-tab-name">쿠키</li>
        </ul>
      ),
      tabCont: (
        <div>
          {cookie.map((product, cookie) => {
            return (
              <div className="detail-product-outer-box" key={cookie}>
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
          className={activeIndex === 0 ? 'is-active' : ''}
          onClick={() => tabClickHandler(4)}
        >
          <li className="product-tab-name">케이크</li>
        </ul>
      ),
      tabCont: (
        <div>
          {cake.map((product, cake) => {
            return (
              <div className="detail-product-outer-box" key={cake}>
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

  return (
    <section className="detail">
      <div className="detail-nav">네브바</div>
      <div className="detail-pic">
        <img src="./images/cup.jpg" />
      </div>

      <ul className="products-tabs">
        {tabContArr.map((section, index) => {
          return section.tabTitle;
        })}
      </ul>

      <div>{tabContArr[activeIndex].tabCont}</div>

      <div className="detail-footer-button">
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
