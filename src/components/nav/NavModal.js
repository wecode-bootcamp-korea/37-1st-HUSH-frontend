import React, { useEffect, useState } from 'react';
import './NavModal.scss';
import SearchModal from './SearchModal';

function NavModal({ closeModal }) {
  const [inputValue, setInputValue] = useState('');
  const [searchList, setSearchList] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [isSearchModal, setIsSearchModal] = useState(false);

  useEffect(() => {
    fetch('/data/products.json')
      .then(response => response.json())
      .then(result => setSearchList(result));
  }, []);

  const searchInput = e => {
    setInputValue(e.target.value);
    setIsSearchModal(true);
    searchList.filter(item => {
      if (item.name.includes(inputValue)) {
        setSearchData(item.name);
      }
    });
  };

  return (
    <div>
      <div className="search-modal">
        <div className="search-main">
          <input
            type="text"
            placeholder="따끈따근 신제품이 궁금하다면?"
            value={inputValue}
            onChange={searchInput}
          />
          <a href="#!">
            <img
              className="search-btn"
              src="/images/Nav/search.png"
              alt="searchBtn"
            />
          </a>
          <button onClick={closeModal}>x</button>
        </div>
        {isSearchModal && <SearchModal searchData={searchData} />}
        <div className="search-footer">
          <div className="search-modal-left">
            <h2>인기 검색어</h2>
            <ul>
              <li>
                <a href="#!">#선물용</a>
              </li>
              <li>
                <a href="#!">#무설탕</a>
              </li>
              <li>
                <a href="#!">#할인</a>
              </li>
              <li>
                <a href="#!">#신메뉴</a>
              </li>
              <li>
                <a href="#!">#달달</a>
              </li>
              <li>
                <a href="#!">#갓석문</a>
              </li>
            </ul>
          </div>
          <div className="search-modal-right">
            <h3>최근 검색어</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavModal;
