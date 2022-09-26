import React from 'react';

function SearchModal({ searchList }) {
  return (
    <div className="search-list">
      {searchList.map(item => {
        return <p key={item.id}>{item.name}</p>;
      })}
    </div>
  );
}

export default SearchModal;
