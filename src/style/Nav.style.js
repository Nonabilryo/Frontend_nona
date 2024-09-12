import styled from "styled-components";

export const Base = styled.div`
  height: 13vh;
  display: flex;
  justify-content: center;
  border-bottom: 0.5px solid #c4c4c4;
`;

export const Ground = styled.div`
  width: 90vw;
  height: 13vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
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

export const SearchButton = styled.button`
background: none;
border: none;

&:hover {
    cursor: pointer;
}
`;

export const Icons = styled.div`
  width: 16vw;
  display: flex;
  justify-content: space-between;
`;
