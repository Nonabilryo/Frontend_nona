import styled from "styled-components";
export const articleContainer = styled.div`
  width: 90%;
  margin: auto;
`;
export const line = styled.ol`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  list-style-type: none;
  padding: 0;
  margin: 0;
`;
export const article = styled.li`
  width: 18%;
  height: 23vw;
  box-sizing: border-box;
  border: 1px solid #EEEEEE;
  border-radius: 1vw;
  margin-left: 1.3vw;
  display: flex;
  flex-wrap: wrap;
  margin-top: 10vw;
  margin-bottom: -4vw;
`;
export const image = styled.img`
  width: 16vw;
  height: 13vw;
  border-top-right-radius: 1vw;
  border-top-left-radius: 1vw;

`;
// todo 밑에 이거 수정
export const button = styled.button`
  width: 100%;
  height: auto;
`;
// export const nav = styled.img`
//   width: 50px;
//   height: 50px;
//   margin-left: 10px;
// `;
// export const navContainer = styled.div`
//   position: absolute;
//   top: 10px;
//   right: 10px;
//   display: flex;
//   flex-direction: row;
//   align-items: flex-end;
// `;

export const title = styled.div`
  position: absolute;
  font-family: pretendard-semibold;
  font-size: 1.2vw;
  margin-top: 14vw;
  margin-left: 1vw;
  width: 15%;
`;

export const price = styled.div`
  position: absolute;
  font-family: pretendard-bold;
  font-size: 1.5vw;
  margin-top: 18vw;
  margin-left: 4vw;
`;

export const unitt = styled.div`
  position: absolute;
  font-family: pretendard-regular;
  margin-top: 18.3vw;
  margin-left: 1vw;
`;