import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Join/Join.scss';
import Nav from '../../components/nav/Nav';

function Join() {
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState({
    email: '',
    password: '',
    name: '',
    address: '',
  });

  const inputChange = e => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  const { email, password, name, address } = inputValue;

  const joinForm = document.getElementsByClassName('join-form')[0];

  const submitForm = e => {
    e.preventDefault();

    fetch('API 주소', {
      method: 'POST',
      headers: {
        enctype: 'multipart/form-data',
      },
      body: new FormData(joinForm),
    })
      .then(response => {
        if (response.ok === true) {
          return response.json();
        }
        throw new Error('에러 발생!');
      })
      .catch(error => {
        alert(error);
      })
      .then(data => {
        console.log(data);
        if (data.message === 'success') {
          alert('회원가입 성공');
          navigate('/login');
        } else {
          alert('회원가입 실패');
        }
      });
  };

  return (
    <>
      <Nav></Nav>
      <h1 className="join-title">회원가입</h1>
      <h2 className="join-subTitle">정보입력</h2>
      <div className="join-content">
        <div className="join-content-head">
          <h3 className="join-content-title">기본정보</h3>
          <p className="join-caution-text">
            <span className="join-caution-symbol">*</span>표시는 반드시
            입력하셔야 하는 항목입니다.
          </p>
        </div>
        <form
          className="join-form"
          onChange={inputChange}
          onSubmit={submitForm}
        >
          <div className="join-form-email">
            <label>
              <span className="join-caution-symbol">*</span>이메일
            </label>
            <input name="email" />
            <select className="join-form-select">
              <option>직접입력</option>
              <option>@naver.com</option>
              <option>@gmail.com</option>
              <option>@nate.com</option>
            </select>
          </div>
          <div className="join-form-password">
            <label>
              <span className="join-caution-symbol">*</span>비밀번호
            </label>
            <input
              name="password"
              placeholder="영문 대소문자와 특수문자 포함, 8자리 이상"
            />
          </div>
          <div className="join-form-name">
            <label>
              <span className="join-caution-symbol">*</span>이름
            </label>
            <input name="name" />
          </div>
          <div className="join-form-address">
            <label>
              <span className="join-caution-symbol">*</span>주소
            </label>
            <input name="address" />
          </div>
          <button className="join-form-btn">회원가입</button>
        </form>
      </div>
    </>
  );
}

export default Join;
