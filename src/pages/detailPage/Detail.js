import React, { useEffect, useState } from 'react';
import DetailTab from './DetailTab';
import './Detail.scss';
import DetailTopInfo from './DetailTopInfo';

function Detail() {
  const [prdData, setPrdData] = useState({});

  const { id, name, price, stock, category_name, thumbnail_image_url } =
    prdData;

  useEffect(() => {
    fetch('http://192.168.228.223:3000/products/showproduct/3', {
      headers: {
        authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo2LCJpYXQiOjE2NjQwMDk3ODR9.nvQGE9HLe8n-JCgqqRk3O-2dGEujzQhWIgm0WyCKN60',
      },
    })
      .then(res => res.json())
      .then(data => {
        setPrdData(data.message);
      });
  }, []);

  return (
    <div className="detail-content">
      <div className="detail-wrap">
        <DetailTopInfo
          key={id}
          id={id}
          name={name}
          price={price}
          stock={stock}
          category_name={category_name}
          thumbnail_image_url={thumbnail_image_url}
        />
      </div>

      <div className="prd-detail">
        <DetailTab />
      </div>
    </div>
  );
}

export default Detail;
