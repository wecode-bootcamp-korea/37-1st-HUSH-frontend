import React, { useState } from 'react';
import '../Login/Login.scss';

function Login() {
  const [inputValue, setInputValue] = useState({
    email: '',
    password: '',
  });

  const inputChange = e => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  const { email, password } = inputValue;

  const submitForm = e => {
    e.preventDefault();
    fetch('http://10.58.2.130:3001/users/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
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
        if (data.message === 'EXCESS_SUCCESS') {
          localStorage.setItem('accessToken', data.accessToken);
          alert('로그인 성공');
        } else if (data.message === 'WRONG_EMAIL') {
          alert('이메일 다시');
        } else if (data.message === 'WRONG_PASSWORD') {
          alert('비밀번호 다시');
        }
      });
  };

  return (
    <>
      <div className="login">
        <h1 className="login-title">로그인</h1>
        <form
          className="login-form"
          onChange={inputChange}
          onSubmit={submitForm}
        >
          <input
            className="login-email-input"
            name="email"
            placeholder="이메일"
          />
          <input
            className="login-password-input"
            name="password"
            placeholder="비밀번호"
          />
          <input
            type="checkbox"
            id="saveEmail"
            className="login-checkbox-input"
          />
          <label htmlFor="saveEmail" className="login-checkbox-label">
            <span>아이디 저장</span>
          </label>
          <button className="login-btn">로그인</button>
        </form>
        <p className="login-link-join">회원가입</p>
      </div>
    </>
  );
}

export default Login;
