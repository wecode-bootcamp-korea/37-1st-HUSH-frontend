import React, { useEffect, useRef, useState } from 'react';
import './Main.scss';
import Slider from './Slider';

function Main() {
  const slideRef = useRef();
  const [count, setCount] = useState(1);
  const [sliders, setSlider] = useState([]);

  useEffect(() => {
    fetch('/data/slider.json')
      .then(res => res.json())
      .then(data => {
        setSlider(data);
      });
  }, []);

  useEffect(() => {
    const interval = setTimeout(() => {
      setCount(() => {
        if (count < sliders.length) {
          setCount(count + 1);
        } else {
          setCount(1);
        }
      });

      handleSlider(count);

      return () => clearTimeout(interval);
    }, 3000);
  });

  const handleSlider = count => {
    console.log(count);

    slideRef.current.style.transition = 'all 0.5s ease-in-out';

    if (count >= sliders.length) {
      slideRef.current.style.transform = 'translateX(0)';
    } else {
      slideRef.current.style.transform = `translateX(-${1224 * count + 50}px)`;
    }
  };

  return (
    <div className="main-warpper">
      <div className="main-visual">
        <Slider
          sliders={sliders}
          slideRef={slideRef}
          count={count}
          handleSlider={handleSlider}
        />
      </div>
    </div>
  );
}

export default Main;
