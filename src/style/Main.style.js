import styled from "styled-components";

export const all = styled`
  position: absolute;
`;

export const box = styled.div`
  position: relative;
  width: 100%;
  height: 7vw;
  z-index: 0;
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
  margin-top: 8vw;
`;

export const showBox = styled.div`
  z-index: 0;
  width: 16.2vw;
  height: 10.5vw;
  position: absolute;
  margin-top: 14.55vw;
  border-bottom-left-radius: 0.6vw;
  border-bottom-right-radius: 0.6vw;
  box-shadow: inset 0 -0.08vw 0 0 #e1e1e1,
    /* 아래쪽 */ inset -0.08vw 0 0 0 #e1e1e1,
    /* 왼쪽 */ inset 0.08vw 0 0 0 #e1e1e1; /* 오른쪽 */
`;

export const tiText = styled.div`
  font-size: 2.4vw;
  font-family: pretendard-semibold;
  position: absolute;
  margin-top: -3.5vw;
  margin-left: 1vw;
`;

export const divide = styled.div`
  background-color: red;
  position: absolute;
  height: 0.1vw;
  width: 100vw;
  margin-left: -5vw;
  margin-top: -7vw;
  background-color: #c4c4c4;
`;

export const line = styled.ol`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 27vw;
  list-style-type: none;
  padding: 0;
  margin-top: -1vw;
`;

export const article = styled.li`
  width: 18%;
  box-sizing: border-box;
  border-radius: 0.7vw;
  margin: 1%;
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  cursor: pointer;
`;

export const image = styled.img`
  width: 100%;
  height: 58%;
  box-sizing: border-box;
  border-bottom: solid 0.5px black;
  border-top-right-radius: 0.6vw;
  border-top-left-radius: 0.6vw;
  margin-bottom: -4vw;
  text-align: center;
`;

export const button = styled.button`
  width: 100%;
  height: auto;
`;

export const title = styled.div`
  position: absolute;
  font-family: pretendard-semibold;
  font-size: 1.1vw;
  margin-top: 15.2vw;
  width: 15%;
  margin-left: 0.5vw;
  text-align: left;
`;

export const price = styled.div`
  position: absolute;
  font-family: pretendard-bold;
  font-size: 1.4vw;
  margin-top: 21vw;
  margin-left: 2.9vw;
`;

export const unitt = styled.div`
  position: absolute;
  font-family: pretendard-regular;
  margin-top: 21.3vw;
  margin-left: 0.5vw;
  font-size: 1vw;
`;

export const dateBefore = styled.div`
  position: absolute;
  margin-left: 12.5vw;
  margin-top: 21.4vw;
  font-size: 0.85vw;
  color: #8f8f8f;
`;
