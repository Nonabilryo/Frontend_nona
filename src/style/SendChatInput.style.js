import styled from "styled-components";

export const SendChatArea = styled.div`
border: 1px solid #C4C4C4;
display: flex;
align-items: center;
border-radius: 7px;
padding-right: 0.5vw;
`;

export const SendChat = styled.input`
width: 37vw;
height: 5vh;
border: none;
outline: none;
border-radius: 7px;
padding-left: 1vw;
padding-right: 1vw;
`;

export const sendBtn = styled.button`
border: none;
background: none;
&:hover{
  cursor: pointer;
}
`;

export const SendImg = styled.img`
height: 2.5vh;
`;