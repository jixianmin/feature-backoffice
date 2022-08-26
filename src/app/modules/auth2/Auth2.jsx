import React, { useState } from "react";
import * as AuthStyle from "./authstyle/Auth.style";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/core/Auth";

const Auth = () => {
  const { saveAuth, setCurrentUser } = useAuth();
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState({
    idValue: "",
    passwordValue: "",
  });

  const handleChageInputValue = (e) => {
    const { name, value } = e.target;

    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const testValue = () => {
    if (inputValue.idValue.length === 0) {
      alert("아이디 항목은 필수 입력값입니다.");
      return false;
    } else if (inputValue.passwordValue.length === 0) {
      alert("패스워드 항목은 필수 입력값입니다.");
      return false;
    }
    return true;
  };

  const goToMain = () => {
    if (testValue()) {
      fetch("https://api.game.tiadev.net/api/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: inputValue.idValue,
          password: inputValue.passwordValue,
        }),
      })
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          if (result.success) {
            setCurrentUser(result.data);
            saveAuth(result.data);
            localStorage.setItem("login-token", result.data.access_token);
            navigate("/dashboard");
          } else {
            alert("등록되지않은 회원입니다.");
            saveAuth(undefined);
          }
        });
    } else {
      return null;
    }
  };

  return (
    <AuthStyle.AuthWrapper>
      <AuthStyle.LeftImg />
      <AuthStyle.RightImg />
      <AuthStyle.AuthBox>
        <AuthStyle.AuthfirstBox />
        <AuthStyle.AuthSecondBox>
          <AuthStyle.AuthTitleText>관리자 로그인</AuthStyle.AuthTitleText>
          <AuthStyle.AuthWarning>
            관리자 계정이 필요한 경우 담당 개발자 에게 문의해주시길 바랍니다.
          </AuthStyle.AuthWarning>
          <AuthStyle.AuthText>Email</AuthStyle.AuthText>
          <AuthStyle.AuthInput
            name="idValue"
            value={inputValue.idValue}
            onChange={handleChageInputValue}
          />
          <AuthStyle.AuthText>Password</AuthStyle.AuthText>
          <AuthStyle.AuthInput
            type="password"
            name="passwordValue"
            value={inputValue.passwordValue}
            onChange={handleChageInputValue}
          />
          <AuthStyle.AuthSecondBoxButton onClick={goToMain}>
            Sign In
          </AuthStyle.AuthSecondBoxButton>
        </AuthStyle.AuthSecondBox>
      </AuthStyle.AuthBox>
    </AuthStyle.AuthWrapper>
  );
};
export default Auth;
