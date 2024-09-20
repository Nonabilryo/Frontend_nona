import React, { useEffect, useState } from "react";
import { Client } from "@stomp/stompjs";
import * as S from "../../style/Chatting.style";
import ChatInput from "../../components/chatInput/ChatInput";
import userImg from "../../assets/img/user.svg";
import searchImg from "../../assets/img/searchGray.svg";
import mapImg from "../../assets/img/map.svg";
import dummyImg from "../../assets/img/dummyImg.svg";

const ChattingPage = () => {
  const [message, setMessage] = useState("");
  const [chatMessages, setChatMessages] = useState([]);
  const sendMessage = (event) => {
    event.preventDefault();

    const chatMessage = {
      sender: "사용자 이름", // 현재 사용자 정보
      content: message,
      type: "CHAT",
    };

    if (client && client.connected) {
      client.publish({
        destination: "/app/chat", // 서버의 메시지 핸들러 경로
        body: JSON.stringify(chatMessage),
      });
      setMessage(""); // 메시지 전송 후 입력 필드 비우기
    }
  };
  let client;

  const sendIdxToServer = async(idx) => {
    const accessToken = localStorage.getItem('accessToken');
  }

  useEffect(() => {
    // STOMP 클라이언트 설정
    client = new Client({
      brokerURL: "ws://10.80.161.246:8080/chat/ws",
      onConnect: () => {
        console.log("Connected to STOMP server");

        // 메시지 구독
        client.subscribe("/topic/messages", (message) => {
          const receivedMessage = JSON.parse(message.body);
          setChatMessages((prevMessages) => [...prevMessages, receivedMessage]);
        });
      },
      onDisconnect: () => {
        console.log("Disconnected from STOMP server");
      },
    });

    // 클라이언트 활성화
    client.activate();

    // 컴포넌트 언마운트 시 연결 해제
    return () => {
      client.deactivate();
    };
  }, []);

  return (
    <>
      <S.all>
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
            {chatMessages.map((msg, index) => (
              <div key={index}>
                <strong>{msg.sender}</strong>: {msg.content}
              </div>
            ))}
          </S.middleMiddle>
          <S.middleBottom>
            <ChatInput
              message={message}
              setMessage={setMessage}
              sendMessage={sendMessage}
            />
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
