import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductList from './ProductList';
import Dropdown from './ProductDropdown';
import './Product.scss';

const TAB_LIST = ['all', '초콜릿', '캔디', '쿠키', '젤리', '케이크'];

function Product() {
  const [currTab, setCurrTab] = useState('all');
  const [productLists, setProductLists] = useState([]);
  const [dropdownMenu, setDropDownMenu] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const offset = searchParams.get('offset');
  const limit = searchParams.get('limit');
  // const limit = 12;
  // const offset = 0;

  const movePage = pageNum => {
    searchParams.set('offset', (pageNum - 1) * 10);
    setSearchParams(searchParams);
  };

  const filterItemIncrease = event => {
    const priceSorting = [...productLists];
    const priceCompare = key => (a, b) => {
      return a[key] - b[key];
    };
    priceSorting.sort(priceCompare('price'));
    setProductLists(priceSorting);
  };

  const filterItemDecrease = event => {
    const priceSorting = [...productLists];
    const priceCompare = key => (a, b) => {
      return b[key] - a[key];
    };
    priceSorting.sort(priceCompare('price'));
    setProductLists(priceSorting);
  };

  const accessToken = localStorage.getItem('accessToken');

  useEffect(() => {
    // fetch(
    //   `https://jsonplaceholder.typicode.com/posts?_start=${offset}&_limit=${12}`
    // )
    fetch(`data/${currTab}.json`)
      // fetch(
      //   `http://172.20.10.4:3001/products/?category=${currTab}&offset=${offset}&limit=${limit}`,
      //   {
      //     headers: {
      //       authorization: accessToken,
      //     },
      //   }
      // )
      .then(response => response.json())
      .then(result => setProductLists(result));
  }, [currTab, offset, limit]);

  return (
    <section className="product">
      <div className="product-nav">nav</div>
      <div className="product-pic">
        <img src="/images/cusCakes.jpg" alt="상품" />
        <div className="product-image-letter">
          <h2>HUSH</h2>
          <h3>ENJOY YOUR DESSERT!!!!</h3>
        </div>
      </div>

      <div className="product-menu-tab-wrap">
        <div className="products-tabs-cont">
          <div className="products-tabs">
            <ul className="tabs">
              {TAB_LIST.map(tab => (
                <li
                  key={tab}
                  className={`product-tab-name ${
                    currTab === tab ? 'selected' : ''
                  }`}
                  onClick={() => setCurrTab(tab)}
                >
                  {tab}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="product-tog-cont">
          <div className="product-toggle">
            <button
              className="product-btn"
              onClick={() => {
                setDropDownMenu(!dropdownMenu);
              }}
            >
              필터링
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
                </ul>
              </Dropdown>
            </div>
          </div>
        </div>
      </div>

      <div className="detail-product-wrap">
        <div className="detail-product-middle-box">
          {productLists.map((product, all) => {
            return (
              <div className="detail-product-outer-cont" key={all}>
                <ProductList product={product} />
              </div>
            );
          })}
        </div>
      </div>

      <div className="product-footer-button">
        <button onClick={() => movePage(1)}>1</button>
        <button onClick={() => movePage(2)}>2</button>
        <button onClick={() => movePage(3)}>3</button>
        <button onClick={() => movePage(4)}>4</button>
      </div>
    </section>
  );
}

export default Product;
