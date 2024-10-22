import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import CONFIG from "../../config/config.json";

import * as M from "../../style/MyPage";
import "../../style/MyPage";
import twoline from "../../assets/img/twoline.png";
import userpro from "../../assets/img/userprofile.png";

function MyPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const accessToken = localStorage.getItem("accessToken");

  const [userData, setUserData] = useState({
    idx: "",
    name: "",
    imageUrl: "",
    description: "",
    signed: "",
  });

  const fetchUserData = async () => {
    try {
      const response = await axios.get(
        `${CONFIG.SERVER}/user/${location.pathname.split("/")[2]}`,
        { withCredentials: true }
      );

      setUserData({
        idx: response.data.data.idx,
        name: response.data.data.name,
        imageUrl: response.data.data.imageUrl,
        description: response.data.data.description,
        signed: response.data.data.signed,
      });

      const userDataResponse = await axios.get(
        `${CONFIG.SERVER}/user/${response.data.data.user}`,
        { withCredentials: true }
      );
      setUserData(userDataResponse.data.data);
    } catch (error) {
      if (error.response && error.response.status === 302) {
        window.location.href = error.response.headers.location;
      } else {
        console.error("데이터를 불러오는 도중 오류 발생:", error);
      }
    }
  };

  return (
    <>
      <M.pro>내 프로필</M.pro>
      <M.line></M.line>
      <M.line2></M.line2>
      <M.userpro src={userpro}></M.userpro>
      <M.title>user</M.title>
      <M.followbox>
        <M.followers>followers</M.followers>
        <M.following>following</M.following>
      </M.followbox>
      <M.editpro>프로필 편집</M.editpro>
      <M.checkmine>내가 게시한 상품</M.checkmine>
    </>
  );
}

export default MyPage;
