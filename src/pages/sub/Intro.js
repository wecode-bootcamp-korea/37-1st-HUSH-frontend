import React from 'react';
import './Intro.scss';

function Intro() {
  return (
    <div className="intro-wrap">
      <div className="intro-team">
        <h2 className="intro-title">Team</h2>
        <div className="team-content-wrap">
          <img
            className="intro-team-img"
            src="/images/sub/team.jpg"
            alt="팀 이미지"
          />
          <p className="team-deatil">HUSH팀 최고최고 우후후후훟후훟 야야야야</p>
        </div>
      </div>
      <h2 className="intro-title">Pages</h2>
      {INTRO_CONTENT.map(intro => (
        <div className="intro-content-wrap" key={intro.id}>
          <img
            className="intro-content-img"
            src={intro.img}
            alt="페이지 사진"
          />
          <div className="intro-text-wrap">
            <h3 className="text-wrap-title">{intro.title}</h3>
            <p className="text-wrap-detail">{intro.detail}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Intro;

const INTRO_CONTENT = [
  {
    id: 0,
    title: '메인 페이지',
    img: '/images/sub/00.메인페이지.png',
    detail:
      'slide, hover 등 화려한 애니메이션 효과를 바탕으로 프로젝트의 시작페이지',
  },
  {
    id: 1,
    title: '회원가입 페이지',
    img: '/images/sub/01.회원가입페이지.png',
    detail:
      'slide, hover 등 화려한 애니메이션 효과를 바탕으로 프로젝트의 시작페이지',
  },
  {
    id: 2,
    title: '로그인 페이지',
    img: '/images/sub/02.로그인페이지.png',
    detail:
      'slide, hover 등 화려한 애니메이션 효과를 바탕으로 프로젝트의 시작페이지',
  },
  {
    id: 3,
    title: '제품 페이지',
    img: '/images/sub/03.제품페이지.png',
    detail:
      'slide, hover 등 화려한 애니메이션 효과를 바탕으로 프로젝트의 시작페이지',
  },
  {
    id: 4,
    title: '상세 페이지',
    img: '/images/sub/05.상세페이지.png',
    detail:
      'slide, hover 등 화려한 애니메이션 효과를 바탕으로 프로젝트의 시작페이지',
  },
  {
    id: 5,
    title: '장바구니 페이지',
    img: '/images/sub/04.장바구니페이지.png',
    detail:
      'slide, hover 등 화려한 애니메이션 효과를 바탕으로 프로젝트의 시작페이지',
  },

  {
    id: 6,
    title: '결제 페이지',
    img: '/images/sub/06.결제페이지.png',
    detail:
      'slide, hover 등 화려한 애니메이션 효과를 바탕으로 프로젝트의 시작페이지',
  },
];
