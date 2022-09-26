import React from 'react';
import './Intro.scss';

function Intro() {
  return (
    <div className="intro-wrap">
      <video
        width="440"
        height="250"
        className="event-video"
        autoPlay="outoplay"
        loop="Loop"
        muted
      >
        <source src="/images/Nav/test.mp4" />
      </video>
      <strong>준비중인 페이지입니다.</strong>
    </div>
  );
}

export default Intro;
