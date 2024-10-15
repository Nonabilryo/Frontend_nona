import styled from "styled-components";

export const Container = styled.div`
  position: relative; /* 기준 요소 */
  max-width: 900px;
  height: 100vh; /* 화면의 높이를 꽉 채우기 */
  margin: 0 auto;
  padding: 20px;
  margin-top: 155px;
`;

export const Title = styled.div`
  position: absolute;
  transform: translateX(-50%); /* 중앙 정렬 */
  font-family: Noto Sans KR;
  font-weight: 600;
  font-size: 19px;
  margin-top: 625px;
  margin-left: 420px;
  width: 500px;
`;

export const ImageContainer = styled.div`
  position: relative; /* 사진을 기준으로 버튼 배치 */
  left: 50%;
  transform: translateX(-50%);
  width: 600px;
  height: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
  z-index: 0;
  border: solid 2px #e4e4e4;
`;

export const LeftButton = styled.img`
  cursor: pointer;
  position: absolute;
  z-index: 1;
  left: 0px; /* 이미지 왼쪽에 배치 */
  width: 25px;
  height: 40px;
`;

export const RightButton = styled.img`
  cursor: pointer;
  position: absolute;
  z-index: 1;
  width: 25px;
  height: 40px;
  margin-left: 565px;

`;

export const InfoContainer = styled.div`
  position: absolute;
  top: 460px; /* 이미지 아래쪽으로 배치 */
  left: 50%;
  transform: translateX(-50%);
  text-align: left;
  font-family: pretendard-medium;
  padding: 10px 0;
`;

export const InfoText = styled.div`
  font-size: 18px;
  position: absolute;
  margin-left: -280px;
  margin-top: 275px;
  width: 600px;
`;

export const Price = styled.div`
  font-size: 24px;
  font-weight: bold;
  position: absolute;
  margin-left: -240px;
  margin-top: 210px;
`;

export const chatButton = styled.button`
  position: absolute;
  margin-top: 430px;
  left: 30%;
  background-color: #28c34d;
  color: white;
  font-size: 14px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  width: 380px;
  height: 45px;
  color: white;
  font-size: 20px;
  font-family: Inter;
  font-weight: 600;
`;

export const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: absolute;
  margin-left: 175px;
  margin-top: 30px;
`;

export const ProfileText = styled.p`
  font-size: 18px;
  font-family: Pretendard;
  font-weight: 500;
  margin-left: 240px;
  margin-top: 40px;
  position: absolute;
`;

export const divide = styled.div`
  background-color: red;
  position: absolute;
  height: 0.1vw;
  width: 100vw;
  margin-left: -18.9vw;
  margin-top: -5.4vw;
  background-color: #e4e4e4;
`;

export const divide2 = styled.div`
  background-color: red;
  position: absolute;
  height: 0.1vw;
  width: 37.5vw;
  margin-left: 11.85vw;
  margin-top: 7.5vw;
  background-color: #e4e4e4;
`;

export const InfoCate = styled.div`
  position: absolute;
  color: #8f8f8f;
  font-size: 13px;
  font-family: Noto Sans KR;
  font-weight: 500;
  width: 150px;
  margin-left: -278px;
  margin-top: 150px;
`;

export const InfoDate = styled.div`
  position: absolute;
  margin-left: 235px;
  width: 45px;
  margin-top: 140px;
  color: #8f8f8f;
  font-size: 15px;
  font-family: Noto Sans KR;
  font-weight: 500;
`;

export const InfoType = styled.div`
  position: absolute;
  margin-top: 218px;
  margin-left: -280px;
`;

export const bottom = styled.div`
  position: absolute;
  width: 100px;
  height: 10px;
  margin-top: 200px;
`;
