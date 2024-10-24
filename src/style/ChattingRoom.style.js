import styled from "styled-components";

export const middle = styled.div`
width: 100%;
border-left: 1.5px solid #E4E4E4;
border-right: 1.5px solid #E4E4E4;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  
`;

export const middleMiddle = styled.div`
width: 100%;
height: 100%;
flex-grow: 1;
overflow: scroll;
display: flex;
justify-content: flex-end;
`;

export const middleTop = styled.div`
width: 100%;
height: 10vh;
display: flex;
justify-content: space-between;
align-items: center;
border-bottom: 1.5px solid #E4E4E4;
`;

export const userImg = styled.img`
width: 3vw;
`;

export const UserInfo = styled.div`
display: flex;
align-items: center;
margin-left: 2vw;
`;

export const UserInfoText = styled.div`
height: 6vh;
display: flex;
flex-direction: column;
justify-content: space-around;
margin-left:1vw;
`;

export const UserWhere = styled.div`
display: flex;
align-items: center;
margin-right: 2vw;
`;

export const MapImg = styled.img`
width: 2vw;
margin-right: 0.5vw;
`;

export const middleBottom = styled.div`
width: 100%;
height: 13vh;
display: flex;
align-items: center;
justify-content: center;
`;

export const ChatBubbleArea = styled.div`
display: flex;
flex-direction: column;
align-items: flex-end;
margin-top: 2vh;
`;

export const ChatBubble = styled.div`
background-color: #28C34D;
padding: 1vh 1vw;
border-radius: 5px;
color: white;
margin-right: 2vw;
position: relative;
`;
