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
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid gray;
  border-radius: 8px;
  margin: 1%;
  display: flex;
  flex-wrap: wrap;
`;
export const image = styled.img`
  width: 100%;
  height: auto;
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