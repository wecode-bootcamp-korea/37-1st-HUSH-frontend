import React from 'react';
import Nav from '../nav/Nav';
import './Footer.scss';

function Footer() {
  return (
    <div className="footerWrap">
      <div className="footerAside">
        <img
          src={process.env.PUBLIC_URL + '/images/Footer/footerImg1.png'}
          alt="footerAsideImg"
        />
        <img
          src={process.env.PUBLIC_URL + '/images/Footer/footerImg2.png'}
          alt="footerAsideImg"
        />
        <img
          src={process.env.PUBLIC_URL + '/images/Footer/footerImg3.png'}
          alt="footerAsideImg"
        />
        <img
          src={process.env.PUBLIC_URL + '/images/Footer/footerImg4.png'}
          alt="footerAsideImg"
        />
        <img
          src={process.env.PUBLIC_URL + '/images/Footer/footerImg5.png'}
          alt="footerAsideImg"
        />
      </div>
      <div className="footerMain">
        <div className="footerLeft">
          <div className="footerInput">
            <input type="text" placeholder="이메일주소를 입력해주세요" />
            <button>구독</button>
          </div>
          <p>
            매주 월요일 오후, 구독자님을 위한 제품과 브랜드 이야기를
            전해드립니다. 구독은 언제든 해지할 수 있습니다.
            <span>
              <a href="#!">미리보기</a>
            </span>
          </p>
          <div className="csCenter">
            <strong>고객센터</strong>
            <strong>기업선물</strong>
            <strong>1644-9825</strong>
            <strong>010-3633-3190</strong>
            <p>eogh773@Naver.com</p>
            <p>order@hush.co.kr</p>
            <span>상담전화 13:00 16:00(평일)</span>
            <span>상담톡 10:00 16:00(평일)</span>
          </div>
          <div className="snsBox">
            <img
              src={process.env.PUBLIC_URL + '/images/Footer/IconInstar.png'}
              alt="footerIcon"
            />
            <img
              src={process.env.PUBLIC_URL + '/images/Footer/IconFace.png'}
              alt="footerIcon"
            />
            <img
              src={process.env.PUBLIC_URL + '/images/Footer/IconMini.png'}
              alt="footerIcon"
            />
            <img
              src={process.env.PUBLIC_URL + '/images/Footer/IconTalk.png'}
              alt="footerIcon"
            />
          </div>
        </div>
        <div className="footerRight">
          <div className="navNotice">
            <a href="#!">공지 사항</a>
            <p>
              2022-09-20 [공지] 회원가입 시 초기 100,000포인트 제공
              <span>new</span>
            </p>
            <p>
              2022-09-20 [공지] Hush팀 화이팅입니다요오호호호홓
              <span>new</span>
            </p>
          </div>
          <div className="navFooterMenu">
            <strong>러쉬소개</strong>
            <strong>개인정보방침</strong>
            <strong>FAQ</strong>
            <strong>스카우트</strong>
            <strong>영상정보관리지침</strong>
            <strong>1:1문의</strong>
            <strong>채용안내</strong>
            <strong>이용약관</strong>
          </div>
          <p>서울특별시 강남구 테헤란로 427 | 위워크</p>
          <p>사이트 운영자: 주식회사 허쉬코리아 | 대표이사 갓다영</p>
          <p>사업자 등록번호 : 201-81-00007 사업자정보확인</p>
          <p>통신판매업 신고번호 2022-서울강남</p>
          <section>COPYRIGHT ©LUSHKOREA.CO.LTD.ALL RIGHTS RESERVED.</section>
        </div>
      </div>
    </div>
  );
}

export default Footer;
