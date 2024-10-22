import React, { useState } from "react";
import * as S from "../style/SendChatInput.style";
import SendImg from "../assets/img/send.svg";

const SendChatInput = ({ sendMessage }) => {
  const [message, setMessage] = useState('');

    const handleSendMessage = () => {
        if (message.trim()) {
            sendMessage(message);  // 상위 컴포넌트에서 전달받은 전송 함수 호출
            setMessage('');  // 메시지 전송 후 입력 필드 초기화
        }
    };

  return (
    <S.SendChatArea>
      <S.SendChat
        type="text"
        placeholder="메시지를 입력하세요."
        value={message}
        onChange={(e) => setMessage(e.target.value)} // 입력 값 업데이트
      />
      <S.sendBtn onClick={handleSendMessage}>
        <S.SendImg src={SendImg} />
      </S.sendBtn>
    </S.SendChatArea>
  );
};

export default SendChatInput;