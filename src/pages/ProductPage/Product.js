import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductList from './ProductList';
import Dropdown from './Dropdown';
import './Product.scss';

const TAB_LIST = ['all', 'cake', 'candy', 'chocolate', 'cookie', 'jelly'];

function Product() {
  // const [category, setCategory] = useState({});
  const [currTab, setCurrTab] = useState('');
  const [products, setProducts] = useState([]);
  const [sort, setSort] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [dropdownMenu, setDropDownMenu] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams([]);

  const offset = searchParams.get('offset');
  const limit = searchParams.get('limit');

  const movePage = pageNum => {
    searchParams.set('offset', (pageNum - 1) * 10);
    setSearchParams(searchParams);
  };

  const tabClickHandler = index => {
    setActiveIndex(index);
  };

  const showDropDown = () => {
    setDropDownMenu(!dropdownMenu);
  };

  const filterItemIncrease = event => {
    setSort(event.target.value);
    const priceSorting = [...products];
    const priceCompare = key => (a, b) => {
      // return a[key] > b[key] ? 1 : a[key] > b[key] ? -1 : 0;
      return a[key] - b[key];
    };
    priceSorting.sort(priceCompare('price'));
    setProducts(priceSorting);
    // console.log('클릭');
  };

  const filterItemDecrease = event => {
    setSort(event.target.value);
    const priceSorting = [...products];
    const priceCompare = key => (a, b) => {
      // return a[key] > b[key] ? -1 : a[key] < b[key] ? -1 : 0;
      return b[key] - a[key];
    };
    priceSorting.sort(priceCompare('price'));
    setProducts(priceSorting);
    // console.log('클릭');
  };

  useEffect(() => {
    fetch(`data/${currTab}.json`)
      .then(response => response.json())
      .then(result => setProducts(result));
  }, [currTab]);

  // fetch
  return (
    <section className="product">
      <div className="product-nav">네브바</div>
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
            <button className="product-btn" onClick={showDropDown}>
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
        <button> &gt;</button>
        <button> &gt;&gt;</button>
      </div>
    </section>
  );
}

export default Product;
