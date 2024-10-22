import React, { useState } from "react";
import * as S from "../style/SendChatInput.style";
import SendImg from "../assets/img/send.svg";

const SendChatInput = ({ inputMessage, setInputMessage, sendMessage }) => {

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && inputMessage.trim() !== '') {  // Enter 키를 누르고 메시지가 비어있지 않을 때만 전송
      sendMessage(inputMessage);  // 메시지 전송 함수 호출
      setInputMessage('');  // 입력 필드 초기화
    }
  };

  return (
    <S.SendChatArea>
      <S.SendChat
        type="text"
        placeholder="메시지를 입력하세요."
        value={inputMessage}
        onChange={(e) => setInputMessage(e.target.value)} // 입력 값 업데이트
      />
      <S.sendBtn onClick={handleKeyPress}>
        <S.SendImg src={SendImg} />
      </S.sendBtn>
    </S.SendChatArea>
  );
};

export default SendChatInput;