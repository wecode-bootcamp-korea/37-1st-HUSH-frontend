import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

function Login() {
  const navigate = useNavigate();
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
      .then(response => response.json())
      .then(data => {
        if (data.message === 'EXCESS_SUCCESS') {
          localStorage.setItem('accessToken', data.accessToken);
          alert('로그인 성공!');
          navigate('/');
          return;
        }

        if (ERROR_MSG[data.message]) {
          alert(ERROR_MSG[data.message]);
          return;
        }

        alert('로그인 실패!');
      });
  };

  return (
    <div className="login">
      <h1 className="login-title">로그인</h1>
      <form className="login-form" onChange={inputChange} onSubmit={submitForm}>
        <input className="login-input" name="email" placeholder="이메일" />
        <input className="login-input" name="password" placeholder="비밀번호" />
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
      <p className="login-link-join" onClick={() => navigate('/join')}>
        회원가입
      </p>
    </div>
  );
}

export default Login;

const ERROR_MSG = {
  WRONG_EMAIL: '이메일을 다시 작성해주세요.',
  WRONG_PASSWORD: '비밀번호를 다시 작성해주세요.',
};
