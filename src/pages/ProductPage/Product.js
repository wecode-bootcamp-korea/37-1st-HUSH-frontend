import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductList from './ProductList';
import Dropdown from './Dropdown';
import './Product.scss';

const TAB_LIST = ['all', '초콜릿', '캔디', '쿠키', '젤리', '케이크'];

function Product() {
  const [currTab, setCurrTab] = useState('all');
  const [products, setProducts] = useState([]);
  const [sort, setSort] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [dropdownMenu, setDropDownMenu] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const offset = searchParams.get('offset');
  const limit = 12;

  const movePage = pageNum => {
    searchParams.set('offset', (pageNum - 1) * 10);
    setSearchParams(searchParams);
  };

  const tabClickHandler = index => {
    setActiveIndex(index);
    setCurrTab.filter(item => item.setCurrTab);
  };

  const showDropDown = () => {
    setDropDownMenu(!dropdownMenu);
  };

  const filterItemIncrease = event => {
    setSort(event.target.value);
    const priceSorting = [...products];
    const priceCompare = key => (a, b) => {
      return a[key] - b[key];
    };
    priceSorting.sort(priceCompare('price'));
    setProducts(priceSorting);
  };

  const filterItemDecrease = event => {
    setSort(event.target.value);
    const priceSorting = [...products];
    const priceCompare = key => (a, b) => {
      return b[key] - a[key];
    };
    priceSorting.sort(priceCompare('price'));
    setProducts(priceSorting);
  };

  useEffect(() => {
    // fetch(`https://jsonplaceholder.typicode.com/posts?_start=${0}&_limit=${10}`)
    fetch(`data/${currTab}.json`)
      // fetch(
      //   `http://192.168.228.223:3001/products/?category=${currTab}&offset=${offset}&limit=${limit}`,
      //   {
      //     headers: {
      //       authorization:
      //         'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo2LCJpYXQiOjE2NjQwMDk3ODR9.nvQGE9HLe8n-JCgqqRk3O-2dGEujzQhWIgm0WyCKN60',
      //     },
      //   }
      // )
      .then(response => response.json())
      .then(result => setProducts(result));
  }, [currTab, offset, limit]);

  return (
    <section className="product">
      <div className="product-nav">nav</div>
      <div className="product-pic">
        <img src="/images/cusCakes.jpg" alt="상품" />
        <div className="product-image-letter">
          <h2>HUSH</h2>
          <h3>ENJOY YOUR DESSERT!</h3>
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
          {products.map((product, all) => {
            return (
              <div className="detail-product-outer-cont" key={all}>
                <ProductList product={product} />
              </div>
            );
          })}
        </div>
      </div>

      {/* footer button */}
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
