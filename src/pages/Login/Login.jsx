import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as L from "../../style/Login.style";
import googlelogo from "../../assets/img/google_logo.png";
import cart from "../../assets/img/nonabilryo_cart.png";
import axios from "axios";
import CONFIG from "../../config/config.json";



const Login = ({setIsLogin}) => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    id: "",
    password: "",
  });

  const handleLoginChange = useCallback(
    (e) => {
      const { value, name } = e.target;
      console.log(value)
      setLoginData((prev) => ({ ...prev, [name]: value }));
    },
    [setLoginData]
  );

  const ServerConnect = async () => {
    const LoginData = {
      id: loginData.id,
      password: loginData.password,
    };

    try {
      const { data } = await axios.post(
        `${CONFIG.SERVER}/sso/login`,
        LoginData
      );

      console.log("성공");
    } catch (e) {
      alert("실패");
    }
  };
  const SubmitHandler = async () => {
    const response = await axios.post(
      `${CONFIG.SERVER}/sso/login`,
      {
        headers: {
          'Content-Type': 'application/json'
        },
        'id' : loginData.id,
        'password' : loginData.password
      },
      { withCredentials: true }
    );
    if (response.status) {
      const { accessToken, refreshToken } = response.data.data;
      localStorage.setItem('accessToken', accessToken);  // todo 쿠키로 수정
      localStorage.setItem('refreshToken', refreshToken);  // todo 쿠키로 수정
      setIsLogin(true)
      console.log("---------------------")
      navigate("/main");
      // eslint-disable-next-line no-restricted-globals
      location.reload();
    }
    return response;
  }
  const Submit = () => {
    SubmitHandler()
      .then((e) => console.log(e))
      .catch((e) => console.log(e))
  }

  // useEffect(() => {
  //   ServerConnect();
  // }, []);

  return (
    <>
      <L.cover/>
      <L.back></L.back>
      <L.cart img src={cart} alt="cart" />
      <L.title1>어서오세요,</L.title1>
      <L.title2>노나빌려</L.title2>
      <L.title3>입니다!</L.title3>
      <L.emailbox
        placeholder="아이디를 입력해주세요"
        type="email"
        id="id"
        name="id"
        onChange={handleLoginChange}
      />
      <L.passwordbox
        placeholder="비밀번호를 입력해주세요"
        type="password"
        name="password"
        id="password"
        onChange={handleLoginChange}
      />
      <L.googlelogin>
        구글로 로그인하기
        <L.googlelogo img src={googlelogo} alt="googlelogo" />
      </L.googlelogin>
      <L.login type="submit" onClick={Submit}>
        로그인
      </L.login>
      <L.signup onClick={() => navigate("/signup")}>노나빌려 가입하러 가기</L.signup>
      <L.divideline></L.divideline>
      <L.searchid>아이디 찾기</L.searchid>
      <L.searchpassword>비밀번호 찾기</L.searchpassword>
    </>
  );
};

export default Login;
