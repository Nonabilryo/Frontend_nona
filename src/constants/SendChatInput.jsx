import React from "react";
import * as S from "../style/SendChatInput.style";
import SendImg from "../assets/img/send.svg";

const SendChatInput = ({ inputMessage, setInputMessage, sendMessage, userIdx, receiverIdx }) => {
  if (!inputMessage) return null;

  const handleSend = () => {
    // 메시지를 전송할 때 userIdx와 receiverIdx를 sendMessage에 전달
    sendMessage(userIdx, receiverIdx, inputMessage);
    setInputMessage(""); // 메시지 전송 후 입력란 비우기
  };

  return (
    <S.SendChatArea>
      <S.SendChat
        type="text"
        placeholder="메시지를 입력하세요."
        value={inputMessage}
        onChange={(e) => setInputMessage(e.target.value)} // 입력 값 업데이트
      />
      <S.sendBtn onClick={handleSend}>
        <S.SendImg src={SendImg} />
      </S.sendBtn>
    </S.SendChatArea>
  );
};

export default SendChatInput;