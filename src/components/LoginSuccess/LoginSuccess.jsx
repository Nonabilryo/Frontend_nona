import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import CONFIG from "../../config/config.json";

const LoginSuccess = () => {
  const navigate = useNavigate();
  const accessToken = localStorage.getItem('accessToken');
  const [userData, setUserData] = useState({
    idx: "",
    name: "",
    imageUrl: "",
    description: "",
    signed: ""
  });

  const ServerConnect = async () => {
    const response = await axios.get(
      `${CONFIG.SERVER}/user`,
      {
        headers: {
          Authorization: `${accessToken}`
        }
      }
    );
    setUserData(response.data.data)
    localStorage.setItem('userData', userData)
  };
  useEffect(() => {
    ServerConnect();
  }, []);
  const ClickMainPage = () => {
    navigate("/")
  }

  const openAndroidApp = () => { // 나중에 반드시 적용할 것
    const customScheme = "your_custom_scheme"; // Android 앱이 지원하는 URL Scheme
    const url = `${customScheme}://openApp?userData=${encodeURIComponent(JSON.stringify(userData))}`;
    window.location.href = url;
  }

  return (
    <>
      <h1>{userData.name}님 환영합니다</h1>
      <h1 onClick={ClickMainPage}>메인페이지로 이동 {'<'}---</h1>
    </>
  );
};

export default LoginSuccess;
