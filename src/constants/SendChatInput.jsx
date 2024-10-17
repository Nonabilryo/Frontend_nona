import React from "react";
import * as S from "../style/SendChatInput.style";
import SendImg from "../assets/img/send.svg";

const SendChatInput = ({ inputMessage, setInputMessage, sendMessage }) => {
  return (
    <S.SendChatArea>
      <S.SendChat
        type="text"
        placeholder="메시지를 입력하세요."
        value={inputMessage}
        onChange={(e) => setInputMessage(e.target.value)} // 입력 값 업데이트
      />
      <S.sendBtn onClick={sendMessage}>
        <S.SendImg src={SendImg} />
      </S.sendBtn>
    </S.SendChatArea>
  );
};

export default SendChatInput;