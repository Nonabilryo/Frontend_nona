import styled from "styled-components";

export const all = styled.div`
  width: 100%;
  height: calc(100vh - 13vh);
  display: flex;
  justify-content: center;
  margin-top: 6.5vw;
`;

export const mainLine = styled.div`
  margin-top: -0.1vw;
  z-index: 2;
  width: 100vw;
  height: 0.1vw;
  position: absolute;
  background-color: #c4c4c4;
`;

// export const middle = styled.div`
// width: 100%;
// border-left: 1.5px solid #E4E4E4;
// border-right: 1.5px solid #E4E4E4;
//   background-color: white;
//   display: flex;
//   flex-direction: column;
//   justify-content: flex-start;
//   align-items: center;

// `;

export const frontNlast = styled.div`
  background-color: white;
  width: 50vw;
  display: flex;
  justify-content: center;
`;

export const frontTop = styled.div`
  width: 100%;
  height: 13vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const searchArea = styled.div`
  display: flex;
  align-items: center;
  background-color: #f1f0f0;
  border-radius: 5px;
  padding-right: 0.3vw;
`;

export const search = styled.input`
  width: 16vw;
  height: 4.5vh;
  border: none;
  outline: none;
  background-color: #f1f0f0;
  border-radius: 5px;
  padding-left: 1vw;
  padding-right: 1vw;
  color: #8f8f8f;
`;

export const searchBtn = styled.button`
  border: none;
  background: none;

  &:hover {
    cursor: pointer;
  }
`;

export const searchImg = styled.img`
  width: 1.5vw;
`;

// export const middleTop = styled.div`
// width: 100%;
// height: 10vh;
// display: flex;
// justify-content: space-between;
// align-items: center;
// border-bottom: 1.5px solid #E4E4E4;
// `;

// export const userImg = styled.img`
// width: 3vw;
// `;

// export const UserInfo = styled.div`
// display: flex;
// align-items: center;
// margin-left: 2vw;
// `;

// export const UserInfoText = styled.div`
// height: 6vh;
// display: flex;
// flex-direction: column;
// justify-content: space-around;
// margin-left:1vw;
// `;

// export const UserWhere = styled.div`
// display: flex;
// align-items: center;
// margin-right: 2vw;
// `;

// export const MapImg = styled.img`
// width: 2vw;
// margin-right: 0.5vw;
// `;

// export const middleBottom = styled.div`
// width: 100%;
// height: 13vh;
// display: flex;
// align-items: center;
// justify-content: center;
// `;

// export const SendChatArea = styled.div`
// border: 1px solid #C4C4C4;
// display: flex;
// align-items: center;
// border-radius: 7px;
// padding-right: 0.5vw;
// `;

// export const SendChat = styled.input`
// width: 37vw;
// height: 5vh;
// border: none;
// outline: none;
// border-radius: 7px;
// padding-left: 1vw;
// padding-right: 1vw;
// `;

// export const sendBtn = styled.button`
// border: none;
// background: none;
// &:hover{
//   cursor: pointer;
// }
// `;

// export const SendImg = styled.img`
// height: 2.5vh;
// `;

// export const middleMiddle = styled.div`
// height: 100%;
// overflow: scroll;
// `;

export const productArea = styled.div`
  width: 20vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const DummyImg = styled.img`
  width: 100%;
`;

export const prodTitle = styled.p`
  font-size: 20px;
  font-weight: 500;
`;

export const prodPrice = styled.p`
  font-size: 30px;
  font-weight: bold;
`;

export const prodContents = styled.p`
  font-size: 17px;
  font-weight: 400;
`;

export const prodBtn = styled.button`
  width: 17vw;
  height: 6vh;
  background-color: #28c34d;
  border: none;
  border-radius: 8px;
  font-size: 17px;
  color: white;
  font-weight: bold;
  margin-top: 6vh;
  cursor: pointer;
`;
