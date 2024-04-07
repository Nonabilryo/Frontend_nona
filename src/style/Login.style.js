import { type } from "@testing-library/user-event/dist/type";
import styled from "styled-components";

export const all = styled.div`
  position: absolute;
`;

export const back = styled.div`
  width: 480px;
  height: 1900px;
  transform: rotate(45deg);
  transform-origin: 0 0;
  position: absolute;
  background: #3ddc63;
  margin-left: 900px;
  top: -800px;

  /* width: 900px;
  height: 3000px;
  background-color: #3ddc63;
  transform: rotate(44deg);
  position: absolute;
  top: -1300px;
  margin-left: 250px;
  overflow: hidden; */
`;

export const cart = styled.img`
  position: absolute;
  width: 550px;
  height: 550px;
  margin-top: 230px;
  margin-left: 100px;
`;

export const title1 = styled.text`
  text-align: right;
  color: black;
  font-size: 40px;
  font-family: Noto Sans KR;
  font-weight: 700;
  margin-left: 1150px;
  margin-top: 50px;
  position: absolute;
  width: 185px;
  height: 40px;
`;

export const title2 = styled.div`
  text-align: right;
  color: #3ddc63;
  font-size: 50px;
  font-family: Noto Sans KR;
  font-weight: 700;
  position: absolute;
  margin-left: 1025px;
  margin-top: 95px;
  width: 175px;
  height: 50px;
`;
export const title3 = styled.div`
  text-align: right;
  color: black;
  font-size: 45px;
  font-family: Noto Sans KR;
  font-weight: 700;
  word-wrap: break-word;
  position: absolute;
  margin-left: 1205px;
  margin-top: 100px;
  width: 130px;
  height: 50px;
`;

export const emailbox = styled.input`
  &::placeholder {
    width: 180px;
    height: 20px;
    color: #adadad;
    font-size: 20px;
    font-family: Noto Sans KR;
    position: absolute;
    margin-left: 30px;
  }
  width: 500px;
  height: 70px;
  background: white;
  border-radius: 15px;
  border: 2px #efefef solid;
  position: absolute;
  margin-left: 830px;
  margin-top: 250px;
  font-family: Noto Sans KR;
  font-size: large;
`;

export const passwordbox = styled.input`
  &::placeholder {
    width: 200px;
    height: 20px;
    color: #adadad;
    font-size: 20px;
    font-family: Noto Sans KR;
    position: absolute;
    margin-left: 30px;
  }

  width: 500px;
  height: 70px;
  background: white;
  border-radius: 15px;
  border: 2px #efefef solid;
  position: absolute;
  margin-left: 830px;
  margin-top: 350px;
  font-family: Noto Sans KR;
  font-size: large;
`;

export const googlelogin = styled.button`
  color: #adadad;
  font-size: 20px;
  font-family: Noto Sans KR;
  position: absolute;
  text-align: center;
  width: 500px;
  height: 70px;
  background: white;
  border-radius: 15px;
  border: 2px #efefef solid;
  position: absolute;
  margin-left: 830px;
  margin-top: 500px;
`;

export const googlelogo = styled.img`
  width: 35px;
  height: 35px;
  position: absolute;
  left: 20px;
  bottom: 15px;
`;

export const login = styled.button`
  color: white;
  font-size: 20px;
  font-family: Noto Sans KR;
  position: absolute;
  text-align: center;
  width: 500px;
  height: 70px;
  background: #3ddc63;
  border-radius: 15px;
  border: none;
  position: absolute;
  margin-left: 830px;
  margin-top: 600px;
`;

export const signup = styled.text`
  color: #adadad;
  font-size: 20px;
  font-family: Noto Sans KR;
  font-weight: 400;
  text-decoration: underline;
  position: absolute;
  margin-top: 700px;
  margin-left: 1000px;
  width: 190px;
`;

export const divideline = styled.div`
  width: 25px;
  height: 2px;
  transform: rotate(90deg);
  position: absolute;
  background-color: #adadad;
  margin-left: 1080px;
  margin-top: 760px;
`;

export const searchid = styled.text`
  color: #adadad;
  font-size: 20px;
  font-family: Noto Sans KR;
  font-weight: 400;
  text-decoration: underline;
  position: absolute;
  margin-top: 750px;
  margin-left: 950px;
  width: 190px;
`;

export const searchpassword = styled.text`
  color: #adadad;
  font-size: 20px;
  font-family: Noto Sans KR;
  font-weight: 400;
  text-decoration: underline;
  position: absolute;
  margin-top: 750px;
  margin-left: 1140px;
  width: 190px;
`;
