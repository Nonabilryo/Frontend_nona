import React, { useEffect, useState } from "react";
import * as S from "../style/ChattingRoom.style";
import SendChatInput from "./SendChatInput";
import { useLocation } from "react-router-dom";
import { Client } from "@stomp/stompjs";
import SockJS from "sockjs-client";
import axios from "axios";
import CONFIG from "../config/config.json";
import mapImg from "../assets/img/map.svg";
import userImg from "../assets/img/user.svg";

const ChattingRoom = () => {
  const token = localStorage.getItem("accessToken");
  const [userIdx, setUserIdx] = useState(null);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [stompClient, setStompClient] = useState(null);
  const location = useLocation();
  const [receiverIdx, setReceiverIdx] = useState(location.state?.receiverIdx || null)

  useEffect(() => {
    console.log("location.state:", location.state); // location.state 확인
    console.log("userIdx:", userIdx); // writerIdx 확인
    console.log("receiverIdx:", receiverIdx); // receiverIdx 확인
  }, [userIdx, receiverIdx, location.state]);

  const connectStompClient = () => {
    const socket = new SockJS(`${CONFIG.SERVER}/chat/ws`);
    const clientInstance = new Client({
      webSocketFactory: () => socket,
      reconnectDelay: 5000,
      onConnect: () => {
        console.log("WebSocket Connected");

        // 본인의 idx로 구독 (Authorization 헤더 추가)
        clientInstance.subscribe(
          `/topic/${userIdx}`,
          (message) => {
            const receivedMessage = JSON.parse(message.body);
            showMessage(receivedMessage.content);
          },
          {
            Authorization: token,
          }
        );
      },
      onStompError: (frame) => {
        console.error("STOMP error:", frame);
      },
    });

    stompClient.activate();
    setStompClient(clientInstance);
  };

  const showMessage = (message) => {
    const newMessage = {
      sender: "System",
      content: message,
      timestamp: new Date().toLocaleTimeString(),
    };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  const fetchUserIdx = async () => {
    try {
      const response = await axios.get(`${CONFIG.SERVER}/user`, {
        headers: {
          Authorization: `${token}`, // 토큰을 Authorization 헤더에 포함
        },
        withCredentials: true
      });

      setUserIdx(response.data.data.idx);
      console.log("현재 사용자 ID:", response);
    } catch (error) {
        console.error("userIdx 정보를 가져오는 도중 오류 발생:", error.response ? error.response.data : error.message);
    }
  };

  useEffect(() => {
    fetchUserIdx();  // 컴포넌트가 마운트될 때 userIdx를 가져옴
  }, [token]);

  useEffect(() => {
    if (userIdx) {
      connectStompClient(); // Stomp 클라이언트 연결
    }
  }, [userIdx]);

  const sendMessage = (message) => {
    const receiver = receiverIdx;

    if (stompClient && stompClient.connected) {
      // StompClient가 연결된 상태인지 확인
      stompClient.publish({
        destination: `/app/${receiver}`,
        body: JSON.stringify({
          sender: userIdx,
          receiver: receiver,
          contentType: "MESSAGE",
          content: message,
        }),
      });

      const newMessage = {
        sender: userIdx,
        content: message,
        timestamp: new Date().toLocaleTimeString(),
      };
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    } else {
      console.error("STOMP 클라이언트가 연결되지 않았습니다.");
    }
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
            <div style={{ color: "#8F8F8F", fontSize: "13px" }}>활동 중</div>
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
            <span
              style={{ color: "#8F8F8F", fontSize: "12px", marginLeft: "5px" }}
            >
              {msg.timestamp}
            </span>
          </div>
        ))}
      </S.middleMiddle>
      <S.middleBottom>
        <SendChatInput
          inputMessage={inputMessage}
          setInputMessage={setInputMessage}
          sendMessage={sendMessage}
        />
      </S.middleBottom>
    </S.middle>
  );
};

export default ChattingRoom;
