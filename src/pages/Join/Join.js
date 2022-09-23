import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Join.scss';

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

  const [isCheckEmail, setIsCheckEmail] = useState(false);

  const pwValidation = /(?=.*[a-zA-ZS])(?=.*?[#?!@$%^&*-]).{8,}/;

  let handleValidateDisplay = pwValidation.test(password)
    ? { display: 'none' }
    : { display: 'inline-block' };

  const checkDuplicate = e => {
    e.preventDefault();

    fetch('http://10.58.2.130:3001/users/signup/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        email: email,
      }),
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('에러 발생!');
      })
      .catch(error => {
        alert(error);
      })
      .then(data => {
        if (data.message === 'ACCESS_SUCCESS') {
          alert('사용 가능한 이메일입니다.');
          setIsCheckEmail(true);
        } else if (data.message === 'KEY_ALREADY_EXISTS') {
          alert('이미 사용중인 이메일입니다.');
          setIsCheckEmail(false);
        }
      });
  };

  const submitForm = e => {
    e.preventDefault();

    if (isCheckEmail) {
      fetch('http://10.58.2.130:3001/users/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({
          email: email,
          name: name,
          password: password,
          address: address,
        }),
      })
        .then(response => {
          if (response.ok === true) {
            return response.json();
          }
          throw new Error('에러 발생!!');
        })
        .catch(error => {
          alert(error);
        })
        .then(data => {
          if (data.message === 'SIGN_UP_SUCCESS') {
            alert('회원가입 성공!');
            navigate('/login');
          } else if (data.message === 'INVALID_PASSWORD') {
            alert(
              '영문(대소문자)과 특수문자를 포함한 8자리 이상의 비밀번호를 작성해주세요.'
            );
          }
        });
    } else {
      alert('이메일 중복을 확인해주세요.');
    }
  };

  return (
    <>
      <h1 className="join-title">회원가입</h1>
      <h2 className="join-subTitle">정보입력</h2>
      <div className="join-content">
        <div className="join-content-head">
          <h3 className="join-content-title">기본정보</h3>
          <p className="join-caution-text">
            <span className="caution-symbol">*</span>표시는 반드시 입력하셔야
            하는 항목입니다.
          </p>
        </div>
        <form onChange={inputChange} onSubmit={submitForm}>
          <div className="join-form">
            <label className="form-label">
              <span className="caution-symbol">*</span>이메일
            </label>
            <input className="form-input-email input-focus" name="email" />
            <button className="duplicate-btn" onClick={checkDuplicate}>
              중복확인
            </button>
          </div>
          <div className="join-form join-form-pw">
            <label className="form-label">
              <span className="caution-symbol">*</span>비밀번호
            </label>
            <div className="form-password-wrap">
              <input
                className="form-input-long input-focus"
                name="password"
                placeholder="영문 대소문자와 특수문자 포함, 8자리 이상"
              />
              <span
                className="join-valid-text"
                style={
                  password.length > 0
                    ? handleValidateDisplay
                    : { display: 'none' }
                }
              >
                * 비밀번호 형식을 다시 확인해주세요.
              </span>
            </div>
          </div>
          <div className="join-form">
            <label className="form-label">
              <span className="caution-symbol">*</span>이름
            </label>
            <input className="form-input-long input-focus" name="name" />
          </div>
          <div className="join-form">
            <label className="form-label">
              <span className="caution-symbol">*</span>주소
            </label>
            <input className="form-input-long input-focus" name="address" />
          </div>
          <button className="join-btn">회원가입</button>
        </form>
      </div>
    </>
  );
}

export default Join;
