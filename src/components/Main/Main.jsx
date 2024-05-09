import React from "react";
import "../../style/Main.style";
import logo from "../../assets/img/nonabilryo_logo.png";
import * as M from "../../style/Main.style";
import mypage from "../../assets/img/mypage.png"
import chat from "../../assets/img/chat.png"
import community from "../../assets/img/community.png"
import line from "../../assets/img/line.png"


function Main() {
  return (
    <>
      <M.logo img src={logo} alt="logo" />
      <M.search>
        
      </M.search>
      <M.mypage img src={mypage} alt="mypage" />
      <M.chat img src={chat} alt="chat" />
      <M.community img src={community} alt="community" />
      <M.line1 img src={line} alt="line" />
      <M.line2 img src={line} alt="line" />
    </>
  );
}

export default Main;
