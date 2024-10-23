import React, { useState } from "react";
import * as S from "../style/SendChatInput.style";
import SendImg from "../assets/img/send.svg";

// const SendChatInput = ({ inputMessage, setInputMessage, sendMessage }) => {
const SendChatInput = ({ newTodo, setNewTodo, addTodo }) => {

  // const handleKeyPress = (e) => {
  //   if (e.key === 'Enter' && inputMessage.trim() !== '') {  // Enter 키를 누르고 메시지가 비어있지 않을 때만 전송
  //     sendMessage(inputMessage);  // 메시지 전송 함수 호출
  //     setInputMessage('');  // 입력 필드 초기화
  //   }
  // };
  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      addTodo(); // Todo 추가 함수 호출
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddTodo(); // Enter 키를 누를 때 Todo 추가
    }
  };

  return (
    <S.SendChatArea>
      <S.SendChat
        type="text"
        placeholder="메시지를 입력하세요."
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)} // 입력 값 업데이트
        onKeyPress={handleKeyPress} // 입력 값 업데이트
      />
      <S.sendBtn onClick={addTodo}>
        <S.SendImg src={SendImg} />
      </S.sendBtn>
    </S.SendChatArea>
  );
};

export default SendChatInput;