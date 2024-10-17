import React, { useEffect, useState } from "react";
import * as S from "../../style/Chatting.style";
import SendChatInput from "../../constants/SendChatInput";
import userImg from "../../assets/img/user.svg";
import searchImg from "../../assets/img/searchGray.svg";
import mapImg from "../../assets/img/map.svg";
import dummyImg from "../../assets/img/dummyImg.svg";
import axios from "axios";

const ChattingPage = () => {
  const token = localStorage.getItem("accessToken");
  const [userName, setUserName] = useState("");
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  useEffect(() => {
    const getUserName = async () => {
      try {
        const response = await axios.get("/user/{}", {
          headers: {
            Authorization: `${token}`,
          },
        });
        setUserName(response.data.name);
        console.log(setUserName)
      } catch (error) {
        console.error("유저 이름을 가져오는데 실패했습니다.", error);
      }
    };
    getUserName();
  }, [token]);

  const sendMessage = () => {
    const newMessage = {
      sender: userName,
      content: inputMessage,
      timestamp: new Date().toLocaleTimeString(),
    };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setInputMessage("");
  }
  return (
    <>
      <S.all>
        <S.mainLine />
        <S.frontNlast style={{ overflow: "scroll" }}>
          <S.frontTop>
            <S.searchArea>
              <S.search type="text" placeholder="검색"></S.search>
              <S.searchBtn>
                <S.searchImg src={searchImg} />
              </S.searchBtn>
            </S.searchArea>
          </S.frontTop>
        </S.frontNlast>
        <S.middle>
          <S.middleTop>
            <S.UserInfo>
              <S.userImg src={userImg} />
              <S.UserInfoText>
                <div style={{ fontSize: "16px", fontWeight: "600" }}>
                  문가인(가인님)
                </div>
                <div style={{ color: "#8F8F8F", fontSize: "13px" }}>
                  활동 중
                </div>
              </S.UserInfoText>
            </S.UserInfo>
            <S.UserWhere>
              <S.MapImg src={mapImg} />
              <div style={{ color: "#8F8F8F", fontSize: "13px" }}>
                대구 달성군 구지면
              </div>
            </S.UserWhere>
          </S.middleTop>
          <S.middleMiddle>
          {messages.map((msg, index) => (
            <div key={index}>
            <strong>{msg.sender}: </strong>
            <span>{msg.content}</span>
            <span style={{ color: "#8F8F8F", fontSize: "12px", marginLeft: "5px" }}>
              {msg.timestamp}
            </span>
          </div>
        ))}
          </S.middleMiddle>
          <S.middleBottom>
          <SendChatInput />
          </S.middleBottom>
        </S.middle>
        <S.frontNlast>
          <S.productArea>
            <S.DummyImg src={dummyImg} />
            <div>
              <S.prodTitle>y2k 스타일 빈티지 목걸이 대여해드립니당</S.prodTitle>
              <S.prodPrice>3000원</S.prodPrice>
              <S.prodContents>
                원가 17만원인데 요새 잘 안써서 그냥 싼값에 대여해드릴게요~^^
              </S.prodContents>
            </div>
            <S.prodBtn>대여하기</S.prodBtn>
          </S.productArea>
        </S.frontNlast>
      </S.all>
    </>
  );
};

export default ChattingPage;
