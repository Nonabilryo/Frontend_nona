import styled from "styled-components";
export const navImage = styled.img`
  width: 4vw;
  height: 4vw;
  margin-left: 5vw;
  margin-top: 1vw;
  position: absolute;
  cursor: pointer;
  
`;

export const iconBox = styled.div`

`;

export const Base = styled.div`
  height: 13vh;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  position: relative;
  z-index: 2;
`;
export const login = styled.div`
  font-family: pretendard-semibold;
  font-size: 1.3vw;
  margin-left: 80vw;
  size: 2vw;
  position: absolute;
  margin-bottom: 1vw;
  cursor: pointer;
`;

export const signup = styled.div`
  font-family: pretendard-semibold;
  font-size: 1.3vw;
  margin-left: 87vw;
  position: absolute;
  margin-bottom: 1vw;
  cursor: pointer;
`;

export const LogoImg = styled.img`
  width: 4.5vw;
  margin-left: 2vw;
  &:hover {
    cursor: pointer;
}
`;

export const ProfileImg = styled.img`
  width: 2.5vw;
  &:hover {
    cursor: pointer;
}
`;

export const ChatImg = styled.img`
  width: 2.5vw;
  &:hover {
    cursor: pointer;
}
`;

export const LogoutImg = styled.img`
  width: 3vw;
  &:hover {
    cursor: pointer;
}
`;

export const SearchBack = styled.div`
  height: 6vh;
  width: 50vw;
  border: 3px solid #3bd15f;
  border-radius: 5px;
  display: flex;
`;

export const Search = styled.input`
  padding-left: 1vw;
  padding-right: 1vw;
  width: 100%;
  border: none;
  outline: none;
  border-radius: 5px;
  font-size: 15px;
`;

export const write = styled.div`
  font-family: pretendard-semibold;
  font-size: 1.2vw;
  margin-left: 85vw;
  position: absolute;
  background-color: #3bd15f;
  width: 4.8vw;
  height: 2vw;
  border-radius: 0.8vw;
  color: white;
  padding-left: 1.5vw;
  padding-top: 0.6vw;
  margin-bottom: 0.4vw;
  cursor: pointer;
`;

export const logout = styled.div`
  font-family: pretendard-semibold;
  font-size: 1.1vw;
  margin-left: 90vw;
  position: absolute;
  margin-top: -2.4vw;
  cursor: pointer;
`;

export const info = styled.img`
  position: absolute;
  margin-left: 71vw;
  width: 2.5vw;
  height: 2.3vw;
  cursor: pointer;
  margin-top: -3vw;
`;

export const chat = styled.img`
  position: absolute;
  margin-left: 76vw;
  width: 2.5vw;
  height: 2.3vw;
  margin-top: -3vw;
  cursor: pointer;
`;

export const comm = styled.img`
  position: absolute;
  margin-left: 81vw;
  width: 2.5vw;
  height: 2.3vw;
  margin-top: -3vw;
  cursor: pointer;
`;
