import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DetailTab from './DetailTab';
import DetailTopInfo from './DetailTopInfo';
import './Detail.scss';

function Detail() {
  const params = useParams();
  const userId = params.id;
  const [prdData, setPrdData] = useState({});
  const {
    id,
    name,
    price,
    stock,
    category_name,
    thumbnail_image_url,
    image_url,
  } = prdData;

  useEffect(() => {
    fetch('/data/all.json')
      .then(res => res.json())
      .then(data => {
        setPrdData(data);
      });
  }, [userId]);

  if (Object.keys(prdData).length === 0) return <>loading...</>;

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
          image_url={image_url}
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
