import React from "react";
import "../../style/Login.style";
import * as L from "../../style/Login.style";
import googlelogo from "../../img/googlelogo.png"
import cart from "../../img/nonabilryo_cart.png"

function Login() {
  return (
    <>
      <L.back></L.back>
      <L.cart img src={cart} alt="cart" />
      <L.title1>어서오세요,</L.title1>
      <L.title2>노나빌려</L.title2>
      <L.title3>입니다!</L.title3>
      <L.emailbox placeholder="이메일을 입력해주세요" type="email"></L.emailbox>
      <L.passwordbox placeholder="비밀번호를 입력해주세요" type="password"></L.passwordbox>
      <L.googlelogin >
        구글로 로그인하기
        <L.googlelogo img src={googlelogo} alt="googlelogo"/>
      </L.googlelogin>
      <L.login type="submit">로그인</L.login>
      <L.signup>노나빌려 가입하러 가기</L.signup>
      <L.divideline></L.divideline>
      <L.searchid>아이디 찾기</L.searchid>
      <L.searchpassword>비밀번호 찾기</L.searchpassword>

    </>
  );
}

export default Login;
