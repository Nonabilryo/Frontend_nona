import React, { useEffect, useState } from "react";
import * as L from "../../style/Login.style";
import googlelogo from "../../img/googlelogo.png";
import cart from "../../img/nonabilryo_cart.png";
import axios from "axios";

const Login = () => {
  const [post,setPost] = useState([]);
  const [id,setId] = useState("");
	const [password,setPassword] = useState("");

  const ServerConnect = () => {
    const Token = cookieStore.get("accessToken");
    axios
      .post("http://api.nonabili.store:8080/sso/login", {
        headers:{
          Authrozation: `Bearer ${Token}`,
        },
        data:{
          id : id,
          password : password,
        }
      }).then((e) => {
        console.log(e);
        console.log("로그인 성공");
      }).catch((e) => {
        console.log(e);
        console.log("로그인 실패");
      });
  };

  useEffect(()=>{
    ServerConnect();
  }, []);

  return (
    <>
      <L.back></L.back>
      <L.cart img src={cart} alt="cart" />
      <L.title1>어서오세요,</L.title1>
      <L.title2>노나빌려</L.title2>
      <L.title3>입니다!</L.title3>
      <L.emailbox
      placeholder="이메일을 입력해주세요"
      type="email"
      value={id}
      onChange={(e)=>{setId(e.target.value)}}/>
      <L.passwordbox
        placeholder="비밀번호를 입력해주세요"
        type="password"
        value={password}
        onChange={(e)=>{setPassword(e.target.value)}}/>
      <L.googlelogin>
        구글로 로그인하기
        <L.googlelogo img src={googlelogo} alt="googlelogo" />
      </L.googlelogin>
      <L.login
      type="submit"
      onChange={ServerConnect}>로그인</L.login>
      <L.signup>노나빌려 가입하러 가기</L.signup>
      <L.divideline></L.divideline>
      <L.searchid>아이디 찾기</L.searchid>
      <L.searchpassword>비밀번호 찾기</L.searchpassword>
    </>
  );
};

export default Login;
