import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import * as M from "../../style/MyPage";
import "../../style/MyPage";
import twoline from "../../assets/img/twoline.png";
import userpro from "../../assets/img/userprofile.png";

function MyPage() {
  const navigate = useNavigate();
  const location = useLocation();

  


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
