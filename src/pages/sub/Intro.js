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
            src="/images/sub/team.jpeg"
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
    detail: '회원가입 시 id중복확인 및 유효성 검사를 통한 계정 생성 페이지',
  },
  {
    id: 2,
    title: '로그인 페이지',
    img: '/images/sub/02.로그인페이지.png',
    detail:
      '유효성 검사 및 실제 DB에 저장된 데이터를 조회하여 로그인 기능 수행, 로그인 시 토큰과 포인트를 발급',
  },
  {
    id: 3,
    title: '제품 페이지',
    img: '/images/sub/03.제품페이지.png',
    detail:
      'Hush의 컨셉인 디저트라는 것에 맞추어, chocolate, candy, jelly, cookie, cake의 5개의 카테고리로 디저트를 소개하는 페이지',
  },
  {
    id: 4,
    title: '상세 페이지',
    img: '/images/sub/05.상세페이지.png',
    detail: '제품의 상세 정보 및 리뷰 등을 조회할 수 있는 페이지',
  },
  {
    id: 5,
    title: '장바구니 페이지 & 찜 페이지',
    img: '/images/sub/04.장바구니페이지.png',
    detail: '구매하고자 하는 상품을 결제페이지 이동 전 확인하는 페이지',
  },

  {
    id: 6,
    title: '결제 페이지',
    img: '/images/sub/06.결제페이지.png',
    detail:
      '구매 절차를 통한 제품을 최종으로 확인하고 결제할 수 있는 페이지, 결제 시 포인트 차감 실시간 반영',
  },
];
