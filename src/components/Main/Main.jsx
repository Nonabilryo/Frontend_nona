import React from "react";
import "../../style/Main.style";
import logo from "../../assets/img/nonabilryo_logo.png";
import * as M from "../../style/Main.style";
import mypage from "../../assets/img/mypage.png";
import chat from "../../assets/img/chat.png";
import community from "../../assets/img/community.png";
import line from "../../assets/img/line.png";
import search_icon from "../../assets/img/search_icon.png";
import delete_search from "../../assets/img/x.png"
import { Switch, ConfigProvider } from 'antd';



function Main() {

  const App = () => (React.createElement("ConfigProvider", { theme: { components: { Switch: {} 
} } }));

  return (
    <>
      <M.logo img src={logo} alt="logo" />
      <M.search />
      <M.search_icon img src={search_icon} alt="search icon" />
      <M.delete_search img src={delete_search} alt="delete" />
      <M.mypage img src={mypage} alt="mypage" />
      <M.chat img src={chat} alt="chat" />
      <M.community img src={community} alt="community" />
      <M.line1 img src={line} alt="line" />
      <M.line2 img src={line} alt="line" />
      <M.main_line />
      <M.recommend>상품 추천</M.recommend>

      <Switch checkedChildren="차용" unCheckedChildren="대여" />


    </>
  );
}

export default Main;
