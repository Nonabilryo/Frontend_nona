import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as M from "../../style/MyPage";
import "../../style/MyPage";
import twoline from "../../assets/img/twoline.png";
import userpro from "../../assets/img/userprofile.png";

function MyPage() {
  const navigate = useNavigate();

  return (
    <>
      <M.pro>내 프로필</M.pro>
      <M.line src={twoline}></M.line>
      <M.userpro src={userpro}></M.userpro>
    </>
  );
}

export default MyPage;
