import styled from "styled-components";

export const all = styled.div`
  position: absolute;
`;

export const back = styled.div`
  width: 30vw;
  height: 100vw;
  transform: rotate(45deg);
  transform-origin: 0 0;
  position: absolute;
  background: #3ddc63;
  margin-left: 46.9vw;
  top: -43vw;
`;

export const cart = styled.img`
  position: absolute;
  width: 34vw;
  height: 34vw;
  margin-top: 15vw;
  margin-left: 5.2vw;
`;

export const title1 = styled.div`
  text-align: right;
  color: black;
  font-size: 2.5vw;
  font-family: Noto Sans KR;
  font-weight: 700;
  margin-left: 78vw;
  margin-top: 3vw;
  position: absolute;
  width: 12.7vw;
  height: 3vw;
`;

export const title2 = styled.div`
  text-align: right;
  color: #3ddc63;
  font-size: 3.6vw;
  font-family: Noto Sans KR;
  font-weight: 700;
  position: absolute;
  margin-left: 69vw;
  margin-top: 6vw;
  width: 13.3vw;
  height: 3.8vw;
`;

export const title3 = styled.div`
  text-align: right;
  color: black;
  font-size: 3vw;
  font-family: Noto Sans KR;
  font-weight: 700;
  word-wrap: break-word;
  position: absolute;
  margin-left: 82.2vw;
  margin-top: 6.5vw;
  width: 8.7vw;
  height: 3.3vw;
`;

export const emailbox = styled.input`
  &::placeholder {
    width: 15vw;
    height: 5vw;
    color: #adadad;
    font-size: 1.3vw;
    font-family: Noto Sans KR;
    position: absolute;
    margin-left: 1.6vw;
  }
  width: 34vw;
  height: 5vw;
  position: absolute;
  background: white;
  border-radius: 0.8vw;
  border: 0.2vw #efefef solid;
  margin-top: 13vw;
  margin-left: 56.5vw;
`;

export const passwordbox = styled.input`
  &::placeholder {
    width: 15vw;
    height: 5vw;
    color: #adadad;
    font-size: 1.3vw;
    font-family: Noto Sans KR;
    position: absolute;
    margin-left: 1.6vw;
  }
  width: 34vw;
  height: 5vw;
  position: absolute;
  background: white;
  border-radius: 0.8vw;
  border: 0.2vw #efefef solid;
  margin-top: 20vw;
  margin-left: 56.5vw;
`;

export const googlelogin = styled.button`
  height: 5vw;
  color: #adadad;
  font-size: 1.3vw;
  font-family: Noto Sans KR;
  width: 34.7vw;
  height: 5vw;
  position: absolute;
  background: white;
  border-radius: 0.8vw;
  border: 0.15vw #efefef solid;
  margin-top: 28.3vw;
  margin-left: 56.5vw;
`;

export const googlelogo = styled.img`
  width: 1.8vw;
  height: 1.8vw;
  position: absolute;
  left: 1.0vw;
  bottom: 1.3vw;
`;

export const login = styled.button`
  color: white;
  font-size: 1.3vw;
  font-family: Noto Sans KR;
  position: absolute;
  text-align: center;
  width: 34.7vw;
  height: 5vw;
  background: #3ddc63;
  border-radius: 15px;
  border: none;
  position: absolute;
  margin-top: 34.6vw;
  margin-left: 56.5vw;
`;

export const signup = styled.text`
  color: #adadad;
  font-size: 1.4vw;
  font-family: Noto Sans KR;
  font-weight: 400;
  text-decoration: underline;
  position: absolute;
  margin-top: 43.1vw;
  margin-left: 67.8vw;
  width: 13.2vw;
`;

export const divideline = styled.div`
  width: 1.7vw;
  height: 0.1vw;
  transform: rotate(90deg);
  position: absolute;
  background-color: #adadad;
  margin-left: 73.2vw;
  margin-top: 47vw;
`;

export const searchid = styled.text`
  color: #adadad;
  font-size: 1.4vw;
  font-family: Noto Sans KR;
  font-weight: 400;
  text-decoration: underline;
  position: absolute;
  margin-top: 46.2vw;
  margin-left: 65.5vw;
`;

export const searchpassword = styled.text`
  color: #adadad;
  font-size: 1.4vw;
  font-family: Noto Sans KR;
  font-weight: 400;
  text-decoration: underline;
  position: absolute;
  margin-top: 46.2vw;
  margin-left: 76.4vw;
`;
