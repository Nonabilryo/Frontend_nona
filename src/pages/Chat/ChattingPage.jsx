import React, { useEffect, useState } from "react";
import * as S from "../../style/Chatting.style";
import ChattingRoom from "../../constants/ChattingRoom.jsx";
import searchImg from "../../assets/img/searchGray.svg";
import dummyImg from "../../assets/img/dummyImg.svg";
import { useLocation } from "react-router-dom";
import { Client } from '@stomp/stompjs';
import SockJS from 'sockjs-client';
import axios from "axios";
import CONFIG from "../../config/config.json"

const ChattingPage = () => {
  const token = localStorage.getItem("accessToken");
  const [userIdx, setUserIdx] = useState(null);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const location = useLocation();
  const [receiverIdx, setReceiverIdx] = useState(location.state?.receiverIdx || null);
  const [stompClient, setStompClient] = useState(null);

  useEffect(() => {
    const socket = new SockJS(`${CONFIG.SERVER}/chat/ws`);
    const client = new Client({
      webSocketFactory: () => socket,
      debug: (str) => console.log(str),
      reconnectDelay: 5000,
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000,
    });

    client.onConnect = (frame) => {
      console.log('Connected: ' + frame);
      // 유저 idx 구독
      client.subscribe(`/user/${userIdx}/messages`, (message) => {
        const msg = JSON.parse(message.body);
        setMessages((prevMessages) => [...prevMessages, msg]);
      }, {
        headers: {
          Authorization: token, // Authorization 헤더 추가
        },
      });
    };

    client.activate();
    setStompClient(client);

    return () => {
      client.deactivate();
    };
  }, []);

  useEffect(() => {
    const fetchUserIdx = async () => {
      try {
        const response = await axios.get("/user", {
          headers: {
            Authorization: `${token}`,
          },
        });
        setUserIdx(response.data.idx); // 서버 응답에서 idx 값을 설정
      } catch (error) {
        console.error("유저 정보를 가져오는 도중 오류 발생:", error);
      }
    };
    fetchUserIdx(); // userIdx를 가져오는 함수 호출
  }, [token]);

  const updateReceiverIdx = (newReceiverIdx) => {
    setReceiverIdx(newReceiverIdx);
  };

  const sendMessage = () => {
    const message = inputMessage;
    const receiver = receiverIdx;

    stompClient.send(`/app/${receiver}`, {}, JSON.stringify({
      sender: userIdx,          // 본인의 idx
      receiver: receiver,       // 상대방의 idx
      contentType: "MESSAGE",   // 메시지 타입
      content: message          // 메시지 내용
    }));

    const newMessage = {
      sender: userIdx,
      content: message,
      timestamp: new Date().toLocaleTimeString(),
    };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setInputMessage("");
  }

  const changeReceiver = () => {
    const newReceiverIdx = setReceiverIdx;
    updateReceiverIdx(newReceiverIdx); // 새로운 수신자 인덱스 설정
  };

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
        <ChattingRoom />
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
