import styled from "styled-components";

export const all = styled`
  position: absolute;
`;

export const logo = styled.img`
  width: 6.3vw;
  height: 6vw; /* height 수정 */
  position: absolute;
  margin-left: 5vw;
  margin-top: 2.9vw;
`;

export const search = styled.input`
  width: 50vw;
  height: 3.5vw;
  background: white;
  border-radius: 0.7vw;
  border: 0.2vw solid #3bd15f; /* border 색상 통일 */
  margin-left: 18vw;
  margin-top: 3.8vw;
  position: absolute;
`;

export const mypage = styled.img`
  width: 2.7vw;
  height: 2.7vw; /* height 수정 */
  margin-left: 76vw;
  margin-top: 4.3vw;
  position: absolute;
`;

export const chat = styled.img`
  width: 2.7vw;
  height: 2.7vw; /* height 수정 */
  margin-left: 84vw;
  margin-top: 4.3vw;
  position: absolute;
`;

export const community = styled.img`
  width: 2.7vw;
  height: 2.7vw; /* height 수정 */
  margin-left: 92vw;
  margin-top: 4.5vw;
  position: absolute;
`;

export const line1 = styled.img`
  width: 0.2vw;
  height: 2.8vw;
  margin-left: 81.4vw;
  position: absolute;
`;

export const line2 = styled.img`
  width: 0.2vw;
  height: 2.8vw;
  margin-left: 89.2vw;
  margin-top: 4.5vw;
  position: absolute;
`;

export const search_icon = styled.img`
  width: 2.4vw;
  height: 2.7vw;
  margin-top: 4.5vw;
  margin-left: 64.5vw;
  z-index: 2;
  position: absolute;
`;

export const delete_search = styled.img`
  width: 1.875vw;
  height: 1.875vw;
  position: absolute;
  margin-top: 4.8vw;
  margin-left: 61vw;
`;

export const main_line = styled.div`
  width: 99.92vw;
  margin-top: 10vw;
  position: absolute;
  border: 0.05vw solid #c4c4c4;
  z-index: 2;
`;

export const recommend = styled.div`
  color: black;
  font-size: 2.5vw;
  font-family: Noto Sans KR;
  font-weight: 500;
  position: absolute;
  z-index: 2;
  margin-top: 14vw;
  margin-left: 5vw;
`;

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
  height: 23vw;
  box-sizing: border-box;
  border: 1px solid #eeeeee;
  border-top-right-radius: 1vw;
  border-top-left-radius: 1vw;
  margin-left: 1.3vw;
  margin-top: 10vw;
  margin-bottom: -4vw;
`;

export const button = styled.button`
  width: 100%;
  height: auto;
`;

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
