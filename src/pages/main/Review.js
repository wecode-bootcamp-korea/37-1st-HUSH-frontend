import React, { useState, useEffect } from 'react';
import useScrollFadeIn from './useScrollFadeIn';
import './Review.scss';

function Review() {
  const [reviews, setReviews] = useState([]);

  const animatedItem = {
    0: useScrollFadeIn('up', 1, 0),
    1: useScrollFadeIn('up', 1, 0.2),
    2: useScrollFadeIn('up', 1, 0.3),
    3: useScrollFadeIn('up', 1, 0.4),
    4: useScrollFadeIn('up', 1, 0.5),
  };

  useEffect(() => {
    fetch('/data/review.json')
      .then(res => res.json())
      .then(data => {
        setReviews(data);
      });
  }, []);

  return (
    <div className="main-review">
      <div className="contain">
        <ul>
          {reviews.map((review, index) => (
            <li key={review.id} {...animatedItem[index]}>
              <div className="box">
                <h2>{review.title}</h2>
                <div className="thumb">
                  <img src={review.imgOn} alt="" className="img-on" />
                  <img src={review.imgOff} alt="" className="img-off" />
                </div>
                <div className="txt">{review.txt}</div>
                <div className="user-id">{review.userId}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Review;
