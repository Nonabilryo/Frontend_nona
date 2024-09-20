import React from "react";
import * as S from './chatInput.style'
import SendImg from "../../assets/img/send.svg";

const ChatInput = ({message, setMessage, sendMessage}) => {

  return (
    <div>
        <S.SendChatArea onSubmit={sendMessage}>
        <S.SendChat
        placeholder="메시지를 입력하세요."
        type="text"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        multiline={false}
        rows={1}
        />
        <S.sendBtn
        disabled={message === ""}
        type="submit"
        >
            <S.SendImg src={SendImg} />
        </S.sendBtn>
        </S.SendChatArea>
    </div>
  );
};
export default ChatInput;
