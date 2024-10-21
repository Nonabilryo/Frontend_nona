import React, { useEffect, useState } from 'react'
import * as S from '../style/ChattingRoom.style'
import SendChatInput from "./SendChatInput";
import { useLocation } from "react-router-dom";
import { Client } from '@stomp/stompjs';
import SockJS from 'sockjs-client';
import axios from "axios";
import CONFIG from "../config/config.json"
import mapImg from "../assets/img/map.svg";
import userImg from "../assets/img/user.svg";



const ChattingRoom = () => {
    const token = localStorage.getItem("accessToken");
  const [userIdx, setUserIdx] = useState(null);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const location = useLocation();
  const [receiverIdx, setReceiverIdx] = useState(location.state?.receiverIdx || null);
  
  const socket = new SockJS(`${CONFIG.SERVER}/chat/ws`); // WebSocket URL로 변경
  const stompClient = new Client({   // Client 인스턴스 생성
    webSocketFactory: () => socket,  // SockJS WebSocket 사용
    reconnectDelay: 5000,            // 자동 재연결 설정
  });

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
          <SendChatInput 
          inputMessage={inputMessage} 
          setInputMessage={setInputMessage} 
          sendMessage={sendMessage}/>
          </S.middleBottom>
        </S.middle>
  )
}

export default ChattingRoom;