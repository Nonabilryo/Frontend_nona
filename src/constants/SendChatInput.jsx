import React from "react";
import * as S from "../style/SendChatInput.style";
import SendImg from "../assets/img/send.svg";

const SendChatInput = ({ inputMessage, setInputMessage, sendMessage }) => {
  if (!inputMessage) return; // 빈 메시지 전송 방지

    const messageData = {
      sender: userIdx, // 본인의 idx
      receiver: receiverIdx, // 상대방 idx
      contentType: "MESSAGE",
      content: inputMessage,
    };
    stompClient.send(`/app/${receiverIdx}`, {}, JSON.stringify(messageData));
    setInputMessage("");
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