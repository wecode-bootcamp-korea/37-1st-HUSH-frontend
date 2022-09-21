import React from 'react';
import './Slider.scss';

function Slider({ sliders, slideRef, count, handleSlider }) {
  return (
    <>
      <div ref={slideRef} className="main-slider-wrap">
        {sliders.map(slider => (
          <div
            key={slider.id}
            className={`${'main-slider-box'} ${
              slider.id === count ? 'active' : ''
            }`}
          >
            <div className="main-slicer-thumb">
              <img src={slider.src} alt={slider.alt} />
            </div>
          </div>
        ))}
      </div>
      <div className="main-pagination">
        {sliders.map(btn => (
          <button
            type="button"
            key={btn.id}
            onClick={() => {
              handleSlider(btn.id);
            }}
            className={`${'btn'} ${btn.id === count ? 'active' : ''}`}
          >
            {btn.text}
          </button>
        ))}
      </div>
    </>
  );
}

export default Slider;
